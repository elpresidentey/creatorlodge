import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import pg from "pg";

function getPool() {
  const cs = process.env.DATABASE_POOLER_URL || process.env.DATABASE_URL || "";
  if (!cs) return null;
  return new pg.Pool({ connectionString: cs, ssl: { rejectUnauthorized: false } });
}

const priceMap: Record<string, number> = { desk: 15000, office: 45000, meeting: 10000, "studio-podcast": 12000, event: 200000, dine: 0, gym: 5000 };

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || "https://qupykncakpthuofrvvgf.supabase.co";
  const anon = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || "";
  const auth = req.headers.authorization as string | undefined;
  let user: any = null;
  if (auth?.startsWith("Bearer ")) {
    const supabase = createClient(url, anon);
    const { data } = await (supabase.auth as any).getUser(auth.slice(7));
    user = data.user;
  }

  if (req.method === "POST") {
    if (!user) return res.status(401).json({ error: "Sign in required" });
    const b = req.body;
    if (!b.outletSlug || !b.spaceId || !b.date || !b.name || !b.email) return res.status(400).json({ error: "Missing fields" });
    if (b.email.toLowerCase() !== user.email.toLowerCase()) return res.status(403).json({ error: "Email must match signed-in user" });
    const amount = priceMap[b.spaceId] ?? 0;
    const id = `CL-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2,5).toUpperCase()}`;
    const pool = getPool();
    if (pool) {
      try {
        await pool.query(`insert into bookings (id, outlet_slug, space_id, date, time, guests, name, email, notes, amount, paid) values ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`, [id, b.outletSlug, b.spaceId, b.date, b.time||null, b.guests||null, b.name, b.email, b.notes||null, amount, amount===0]);
        await pool.end();
      } catch(e:any){ return res.status(500).json({ error: e.message }); }
    }
    return res.status(201).json({ id, message: `Booking confirmed for ${b.spaceId}`, booking: b, amount });
  }

  if (req.method === "GET") {
    if (!user) return res.status(401).json({ error: "Sign in required" });
    const pool = getPool();
    if (!pool) return res.json({ bookings: [], source: "no-db" });
    try {
      const r = await pool.query(`select id, outlet_slug as "outletSlug", space_id as "spaceId", date, time, guests, name, email, notes, created_at as "createdAt", amount, paid from bookings where email=$1 order by created_at desc limit 100`, [user.email]);
      await pool.end();
      return res.json({ bookings: r.rows, source: "db" });
    } catch(e:any){ return res.status(500).json({ error: e.message }); }
  }

  res.status(405).json({ error: "Method not allowed" });
}
