import { RequestHandler } from "express";
import crypto from "crypto";
import { getPool, ensureBookingsTable } from "../lib/db";

const priceMap: Record<string, number> = { desk: 15000, office: 45000, meeting: 10000, "studio-podcast": 12000, event: 200000, dine: 0 };

export const handlePaystackInit: RequestHandler = async (req, res) => {
  const { email, bookingId } = req.body as { email: string; bookingId?: string; spaceId?: string };
  if (!email || !bookingId) return res.status(400).json({ error: "email and bookingId required" });
  // lookup booking and server-side amount
  let amount = 0;
  if (bookingId) {
    const pool = getPool();
    if (pool) {
      await ensureBookingsTable();
      const r = await pool.query(`select amount, space_id from bookings where id=$1`, [bookingId]);
      if (r.rows[0]) amount = r.rows[0].amount ?? priceMap[r.rows[0].space_id] ?? 0;
    }
  }
  if (amount === 0) return res.status(400).json({ error: "Amount is zero — pay at venue" });

  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) return res.json({ mock: true, authorization_url: `https://paystack.mock/pay/${bookingId}`, reference: `MOCK-${Date.now()}`, amount });

  try {
    const r = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: { Authorization: `Bearer ${secret}`, "Content-Type": "application/json" },
      body: JSON.stringify({ email, amount: Math.round(amount * 100), reference: bookingId, callback_url: `${req.headers.origin || "https://creatorslounge.vercel.app"}/book?pay=verify` }),
    });
    const data = await r.json();
    if (!data.status) return res.status(400).json(data);
    res.json(data.data);
  } catch (e: any) { res.status(500).json({ error: e.message }); }
};

export const handlePaystackVerify: RequestHandler = async (req, res) => {
  const { reference } = req.params;
  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) return res.json({ mock: true, status: "success", reference });
  const r = await fetch(`https://api.paystack.co/transaction/verify/${reference}`, { headers: { Authorization: `Bearer ${secret}` } });
  const data = await r.json();
  if (data?.data?.status === "success") {
    const pool = getPool();
    if (pool) await pool.query(`update bookings set paid=true where id=$1`, [reference]);
  }
  res.json(data);
};

export const handlePaystackWebhook: RequestHandler = async (req, res) => {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret) return res.status(500).json({ error: "Not configured" });
  const hash = crypto.createHmac("sha512", secret).update(JSON.stringify(req.body)).digest("hex");
  if (hash !== req.headers["x-paystack-signature"]) return res.status(401).json({ error: "Invalid signature" });
  const event = req.body;
  if (event?.event === "charge.success") {
    const ref = event.data?.reference;
    if (ref) {
      const pool = getPool();
      if (pool) await pool.query(`update bookings set paid=true where id=$1`, [ref]);
    }
  }
  res.sendStatus(200);
};
