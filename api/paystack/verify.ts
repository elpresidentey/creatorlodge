import type { VercelRequest, VercelResponse } from "@vercel/node";
import pg from "pg";

function getPool() {
  const cs = process.env.DATABASE_POOLER_URL || process.env.DATABASE_URL || "";
  if (!cs) return null;
  return new pg.Pool({ connectionString: cs, ssl: { rejectUnauthorized: false } });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  const reference = (req.query.reference as string) || (req.query.reference as string);
  if (!reference) return res.status(400).json({ error: "reference required" });
  if (!secret) {
    // mock: mark paid
    const pool = getPool();
    if (pool) { try { await pool.query(`update bookings set paid=true where id=$1`, [reference]); await pool.end(); } catch {} }
    return res.json({ mock: true, status: "success", reference });
  }
  try {
    const r = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, { headers: { Authorization: `Bearer ${secret}` } });
    const data = await r.json();
    if (data?.data?.status === "success") {
      const pool = getPool();
      if (pool) { await pool.query(`update bookings set paid=true where id=$1`, [reference]); await pool.end(); }
    }
    res.json(data);
  } catch (e: any) { res.status(500).json({ error: e.message }); }
}
