import { RequestHandler } from "express";
import { BookingRequestSchema, BookingResponse } from "../../shared/api";
import { getPool, ensureBookingsTable } from "../lib/db";

// server-side price lookup (prevent client tampering) — mirrors lounge-data but canonical
const priceMap: Record<string, number> = {
  desk: 15000, office: 45000, meeting: 10000, "studio-podcast": 12000, event: 200000, dine: 0,
};

const memBookings: (ReturnType<typeof BookingRequestSchema.parse> & { id: string; createdAt: string; amount: number; paid: boolean })[] = [];
let dbAvailable: boolean | null = null;

async function checkDb(): Promise<boolean> {
  if (dbAvailable !== null) return dbAvailable;
  dbAvailable = await ensureBookingsTable();
  if (!dbAvailable) console.warn("Bookings DB unavailable — falling back to memory. Use pooler 6543.");
  return dbAvailable;
}

export const handleBookings: RequestHandler = async (req, res) => {
  const parsed = BookingRequestSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: "Validation failed", issues: parsed.error.flatten() });
  const body = parsed.data;

  // server-side amount (ignore client amount)
  const amount = priceMap[body.spaceId] ?? 0;

  // optional: if Authorization present, verify email matches token user (handled by optionalAuth)
  const user = (req as any).user;
  if (user && user.email?.toLowerCase() !== body.email.toLowerCase()) {
    return res.status(403).json({ error: "Email must match signed-in user" });
  }

  const id = `CL-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 5).toUpperCase()}`;
  const createdAt = new Date().toISOString();
  const record = { ...body, id, createdAt, amount, paid: amount === 0 };

  const useDb = await checkDb();
  if (useDb) {
    const pool = getPool()!;
    try {
      await pool.query(
        `insert into bookings (id, outlet_slug, space_id, date, time, guests, name, email, notes, created_at, amount, paid) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
        [id, body.outletSlug, body.spaceId, body.date, body.time || null, body.guests || null, body.name, body.email, body.notes || null, createdAt, amount, amount === 0]
      );
    } catch (e: any) {
      console.error("DB insert failed, falling back to memory:", e.message);
      memBookings.push(record);
    }
  } else {
    memBookings.push(record);
  }

  const response: BookingResponse = {
    id,
    message: `Booking confirmed for ${body.spaceId} at ${body.outletSlug} on ${body.date}`,
    booking: body,
  };
  res.status(201).json({ ...response, amount });
};

export const handleListBookings: RequestHandler = async (req, res) => {
  // protected: only allow if authenticated or internal
  const user = (req as any).user;
  if (!user) return res.status(401).json({ error: "Unauthorized — sign in to view bookings" });

  const useDb = await checkDb();
  if (useDb) {
    const pool = getPool()!;
    try {
      // scope to user's email
      const r = await pool.query(
        `select id, outlet_slug as "outletSlug", space_id as "spaceId", date, time, guests, name, email, notes, created_at as "createdAt", amount, paid from bookings where email=$1 order by created_at desc limit 100`,
        [user.email]
      );
      return res.json({ bookings: r.rows, source: "db" });
    } catch (e: any) {
      console.error("DB select failed:", e.message);
    }
  }
  // memory fallback scoped
  const mine = memBookings.filter(b => b.email.toLowerCase() === user.email.toLowerCase());
  res.json({ bookings: mine, source: "memory" });
};
