import { RequestHandler } from "express";
import { BookingRequestSchema, BookingResponse } from "../../shared/api";
import { getPool, ensureBookingsTable } from "../lib/db";
import { sendBookingEmail } from "../lib/email";

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

  const user = (req as any).user;
  if (user && user.email?.toLowerCase() !== body.email.toLowerCase()) {
    return res.status(403).json({ error: "Email must match signed-in user" });
  }

  // Availability check
  const useDbCheck = await checkDb();
  if (useDbCheck) {
    const pool = getPool()!;
    const conflict = await pool.query(`select id from bookings where outlet_slug=$1 and space_id=$2 and date=$3 and coalesce(time,'')=coalesce($4,'') limit 1`, [body.outletSlug, body.spaceId, body.date, body.time || null]);
    if ((conflict.rowCount ?? 0) > 0) return res.status(409).json({ error: "Slot already booked — pick another time" });
  } else {
    if (memBookings.find(b => b.outletSlug===body.outletSlug && b.spaceId===body.spaceId && b.date===body.date && (b.time||"")=== (body.time||""))) return res.status(409).json({ error: "Slot already booked — pick another time" });
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
      if (e?.code === "23505") {
        return res.status(409).json({ error: "Slot already booked — pick another time" });
      }
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
  // fire-and-forget email (don't block response)
  sendBookingEmail(body.email, `Booking ${id} confirmed — ${body.spaceId} @ ${body.outletSlug}`, `<p>Hi ${body.name},</p><p>Your booking <b>${id}</b> for <b>${body.spaceId}</b> at <b>${body.outletSlug}</b> on <b>${body.date} ${body.time||""}</b> is confirmed.</p><p>Guests: ${body.guests} · Amount: ₦${amount.toLocaleString()} ${amount===0?"(Free)":""}</p><p>View history: https://creatorslounge.vercel.app/auth</p>`).catch(()=>{});
  res.status(201).json({ ...response, amount });
};

export const handleListBookings: RequestHandler = async (req, res) => {
  const user = (req as any).user;
  if (!user) return res.status(401).json({ error: "Unauthorized — sign in to view bookings" });
  const admins = (process.env.ADMIN_EMAILS || "").split(",").map(s=>s.trim().toLowerCase()).filter(Boolean);
  const isAdmin = admins.includes(user.email.toLowerCase()) || user.email.toLowerCase().endsWith("@creatorslounge.com");
  const useDb = await checkDb();
  if (useDb) {
    const pool = getPool()!;
    try {
      if (isAdmin) {
        const r = await pool.query(`select id, outlet_slug as "outletSlug", space_id as "spaceId", date, time, guests, name, email, notes, created_at as "createdAt", amount, paid from bookings order by created_at desc limit 200`);
        return res.json({ bookings: r.rows, source: "db", admin: true });
      }
      const r = await pool.query(`select id, outlet_slug as "outletSlug", space_id as "spaceId", date, time, guests, name, email, notes, created_at as "createdAt", amount, paid from bookings where email=$1 order by created_at desc limit 100`, [user.email]);
      return res.json({ bookings: r.rows, source: "db" });
    } catch (e: any) { console.error("DB select failed:", e.message); }
  }
  const mine = isAdmin ? memBookings : memBookings.filter(b => b.email.toLowerCase() === user.email.toLowerCase());
  res.json({ bookings: mine, source: "memory", admin: isAdmin });
};

export const handleDeleteBooking: RequestHandler = async (req, res) => {
  const user = (req as any).user;
  if (!user) return res.status(401).json({ error: "Unauthorized" });
  const id = (req.params as any).id;
  const pool = getPool();
  if (pool) {
    try {
      const r = await pool.query(`delete from bookings where id=$1 and email=$2 returning id`, [id, user.email]);
      if ((r.rowCount ?? 0) > 0) return res.json({ ok: true });
    } catch(e:any){ return res.status(500).json({ error: e.message }); }
  }
  const idx = memBookings.findIndex(b => b.id===id && b.email.toLowerCase()===user.email.toLowerCase());
  if (idx>=0) { memBookings.splice(idx,1); return res.json({ ok:true }); }
  res.status(404).json({ error: "Not found" });
};
