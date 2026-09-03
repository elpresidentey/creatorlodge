import type { VercelRequest, VercelResponse } from "@vercel/node";
import crypto from "crypto";
import pg from "pg";

function getPool() {
  const cs = process.env.DATABASE_POOLER_URL || process.env.DATABASE_URL || "";
  if (!cs) return null;
  return new pg.Pool({ connectionString: cs, ssl: { rejectUnauthorized: false } });
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) return res.status(500).json({ error: "Not configured" });
  const hash = crypto.createHmac("sha512", secret).update(JSON.stringify(req.body)).digest("hex");
  if (hash !== req.headers["x-paystack-signature"]) return res.status(401).json({ error: "Invalid signature" });
  const event = req.body;
  if (event?.event === "charge.success") {
    const ref = event.data?.reference;
    if (ref) {
      const pool = getPool();
      if (pool) { await pool.query(`update bookings set paid=true where id=$1`, [ref]); await pool.end(); }
    }
  }
  res.sendStatus(200);
}

export const config = { api: { bodyParser: false } };
