import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createClient } from "@supabase/supabase-js";
import pg from "pg";
function getPool(){ const cs=process.env.DATABASE_POOLER_URL||process.env.DATABASE_URL||""; if(!cs) return null; return new pg.Pool({connectionString:cs,ssl:{rejectUnauthorized:false}}); }
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "DELETE") return res.status(405).json({ error: "DELETE only" });
  const auth = req.headers.authorization as string | undefined;
  if (!auth?.startsWith("Bearer ")) return res.status(401).json({ error: "Sign in required" });
  const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL || "https://qupykncakpthuofrvvgf.supabase.co";
  const anon = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || "";
  const supabase = createClient(url, anon);
  const { data } = await (supabase.auth as any).getUser(auth.slice(7));
  const user = data.user;
  if (!user) return res.status(401).json({ error: "Invalid token" });
  const id = req.query.id as string;
  const pool = getPool();
  if (pool) {
    try { const r = await pool.query(`delete from bookings where id=$1 and email=$2 returning id`, [id, user.email]); await pool.end(); if ((r.rowCount??0)>0) return res.json({ ok:true }); return res.status(404).json({ error:"Not found" }); } catch(e:any){ return res.status(500).json({ error:e.message }); }
  }
  return res.status(500).json({ error:"No DB" });
}
