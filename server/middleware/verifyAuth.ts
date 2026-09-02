import type { RequestHandler } from "express";
import { createClient } from "@supabase/supabase-js";

export const optionalAuth: RequestHandler = async (req, _res, next) => {
  const auth = req.headers.authorization;
  if (!auth?.startsWith("Bearer ")) return next();
  const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const anon = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
  if (!url || !anon) return next();
  const supabase = createClient(url, anon);
  const token = auth.slice(7);
  const { data } = await supabase.auth.getUser(token);
  if (data.user) (req as any).user = data.user;
  next();
};

export const requireAuth: RequestHandler = async (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth?.startsWith("Bearer ")) return res.status(401).json({ error: "Missing Authorization" });
  const url = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const anon = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;
  if (!url || !anon) return res.status(500).json({ error: "Auth not configured" });
  const supabase = createClient(url, anon);
  const token = auth.slice(7);
  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data.user) return res.status(401).json({ error: "Invalid token" });
  (req as any).user = data.user;
  next();
};
