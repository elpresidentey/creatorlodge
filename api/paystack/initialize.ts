import type { VercelRequest, VercelResponse } from "@vercel/node";
import pg from "pg";

const priceMap: Record<string, number> = { desk: 15000, office: 45000, meeting: 10000, "studio-podcast": 12000, event: 200000, dine: 0, gym: 5000 };

function getPool() {
  const cs = process.env.DATABASE_POOLER_URL || process.env.DATABASE_URL || "";
  if (!cs) return null;
  return new pg.Pool({ connectionString: cs, ssl: { rejectUnauthorized: false } });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const { email, bookingId } = req.body as { email: string; bookingId: string };
  if (!email || !bookingId) return res.status(400).json({ error: "email and bookingId required" });
  const pool = getPool();
  let amount = 0;
  if (pool) {
    try {
      const r = await pool.query(`select amount, space_id from bookings where id=$1`, [bookingId]);
      if (r.rows[0]) amount = r.rows[0].amount ?? priceMap[r.rows[0].space_id] ?? 0;
      await pool.end();
    } catch {}
  }
  if (amount === 0) return res.status(400).json({ error: "Amount is zero — pay at venue" });
  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) return res.json({ mock: true, authorization_url: `https://paystack.mock/pay/${bookingId}`, reference: bookingId, amount });
  try {
    const r = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: { Authorization: `Bearer ${secret}`, "Content-Type": "application/json" },
      body: JSON.stringify({ email, amount: Math.round(amount * 100), reference: bookingId, callback_url: `${req.headers.origin || "https://creatorslounge.vercel.app"}/book?pay=verify&reference=${bookingId}` }),
    });
    const data = await r.json();
    if (!data.status) return res.status(400).json(data);
    res.json(data.data);
  } catch (e: any) { res.status(500).json({ error: e.message }); }
}
