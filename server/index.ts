import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleBookings, handleListBookings } from "./routes/bookings";
import { handlePaystackInit, handlePaystackVerify, handlePaystackWebhook } from "./routes/payments";
import { rateLimit } from "./middleware/rateLimit";
import { optionalAuth, requireAuth } from "./middleware/verifyAuth";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors({ origin: process.env.ALLOWED_ORIGIN?.split(",") || [/\.vercel\.app$/, /localhost:\d+$/], credentials: true }));
  app.use(express.json({ limit: "10kb" }));
  app.use(express.urlencoded({ extended: true, limit: "10kb" }));
  // security headers
  app.use((_, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "DENY");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    next();
  });

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.post("/api/bookings", rateLimit({ max: 20, windowMs: 15*60*1000 }), requireAuth, handleBookings);
  app.get("/api/bookings", rateLimit({ max: 30, windowMs: 15*60*1000 }), requireAuth, handleListBookings);
  app.post("/api/paystack/initialize", rateLimit({ max: 10, windowMs: 15*60*1000 }), handlePaystackInit);
  app.get("/api/paystack/verify/:reference", handlePaystackVerify);
  app.post("/api/paystack/webhook", handlePaystackWebhook);

  return app;
}
