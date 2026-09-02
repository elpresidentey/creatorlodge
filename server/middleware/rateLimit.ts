import type { RequestHandler } from "express";

const hits = new Map<string, { count: number; resetAt: number }>();

export function rateLimit({ windowMs = 15 * 60 * 1000, max = 60 }: { windowMs?: number; max?: number }): RequestHandler {
  return (req, res, next) => {
    const ip = (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() || req.ip || "unknown";
    const key = `${ip}:${req.path}`;
    const now = Date.now();
    const entry = hits.get(key);
    if (!entry || now > entry.resetAt) {
      hits.set(key, { count: 1, resetAt: now + windowMs });
      return next();
    }
    entry.count++;
    if (entry.count > max) {
      res.setHeader("Retry-After", String(Math.ceil((entry.resetAt - now) / 1000)));
      return res.status(429).json({ error: "Too many requests, try again later." });
    }
    next();
  };
}

// periodic cleanup
setInterval(() => {
  const now = Date.now();
  for (const [k, v] of hits) if (now > v.resetAt) hits.delete(k);
}, 60_000);
