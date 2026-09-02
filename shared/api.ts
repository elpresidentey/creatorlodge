/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

import { z } from "zod";

export const BookingRequestSchema = z.object({
  outletSlug: z.string().trim().min(2).max(64).regex(/^[a-z0-9-]+$/),
  spaceId: z.string().trim().min(2).max(32).regex(/^[a-z0-9-]+$/),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  time: z.string().max(10).optional().or(z.literal("")),
  guests: z.string().max(10).optional().or(z.literal("")),
  name: z.string().trim().min(2).max(80).regex(/^[^<>]+$/),
  email: z.string().trim().email().max(254).toLowerCase(),
  notes: z.string().trim().max(500).regex(/^[^<>]*$/).optional().or(z.literal("")),
});

export type BookingRequest = z.infer<typeof BookingRequestSchema>;
export interface BookingResponse {
  id: string;
  message: string;
  booking: BookingRequest;
}
export interface OutletsResponse {
  outlets: { slug: string; name: string }[];
}
