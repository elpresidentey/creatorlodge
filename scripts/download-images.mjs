#!/usr/bin/env node
/**
 * Download curated hero images for each house/space.
 * Uses Unsplash Source (no API key needed) for high-quality, consistent photos.
 * Run: node scripts/download-images.mjs
 */

import { mkdir, writeFile, stat } from "fs/promises";
import { join, resolve } from "path";
import { existsSync } from "fs";

const OUT = resolve("public/images");

// Curated Unsplash photo IDs mapped to each house by vibe
const HOUSES = {
  "vi-dome":       { query: "luxury-restaurant-interior-dark-wood",  id: "-photo-here" },
  "yaba-foundry":  { query: "modern-coworking-space-creative",       id: "photo-here" },
  "lekki-garden":  { query: "outdoor-garden-restaurant-terrace",     id: "photo-here" },
  "festac-lagoon": { query: "lakeside-restaurant-evening",           id: "photo-here" },
  "surulere-terrace":{ query: "rooftop-restaurant-city-view",        id: "photo-here" },
  "egbeda-hub":    { query: "modern-gym-interior-dark",              id: "photo-here" },
  "ikoyi-atelier": { query: "art-gallery-white-walls-minimal",       id: "photo-here" },
  "abuja-capital": { query: "private-dining-room-elegant",           id: "photo-here" },
};

// Curated photo IDs from Unsplash (direct, stable URLs)
// These are real Unsplash photo IDs chosen for aesthetic consistency
const CURATED = {
  // === HOUSE HERO IMAGES (800x1000 for 3:4 card aspect ratio) ===
  "vi-dome":         "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=1000&fit=crop&crop=center",      // Upscale restaurant interior, warm lighting
  "yaba-foundry":    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop&crop=center",      // Modern creative coworking
  "lekki-garden":    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=1000&fit=crop&crop=center",      // Garden restaurant terrace
  "festac-lagoon":   "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&h=1000&fit=crop&crop=center",      // Waterfront dining
  "surulere-terrace": "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=1000&fit=crop&crop=center",   // Rooftop terrace evening
  "egbeda-hub":      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=1000&fit=crop&crop=center",      // Modern gym interior
  "ikoyi-atelier":   "https://images.unsplash.com/photo-1577720580479-7d839d829c73?w=800&h=1000&fit=crop&crop=center",      // Minimal art gallery
  "abuja-capital":   "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=1000&fit=crop&crop=center",      // Elegant private dining

  // === SPACE IMAGES (600x400 for landscape cards) ===
  "space-desk":      "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&h=400&fit=crop&crop=center",      // Clean desk workspace
  "space-office":    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop&crop=center",      // Glass private office
  "space-meeting":   "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=600&h=400&fit=crop&crop=center",      // Boardroom meeting room
  "space-podcast":   "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop&crop=center",      // Podcast studio setup
  "space-event":     "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&h=400&fit=crop&crop=center",      // Event hall venue
  "space-dine":      "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&h=400&fit=crop&crop=center",      // Restaurant table setting
  "space-gym":       "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=600&h=400&fit=crop&crop=center",      // Modern gym equipment
  "space-gallery":   "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=600&h=400&fit=crop&crop=center",      // Gallery wall exhibition
  "space-studio":    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop&crop=center",      // Artist studio daylight
  "space-fashion":   "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&h=400&fit=crop&crop=center",      // Fashion atelier rails
  "space-celebration":"https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=400&fit=crop&crop=center",     // Celebration reception hall

  // === GALLERY IMAGES (for gallery section) ===
  "gallery-1":       "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop&crop=center",      // Contemporary art
  "gallery-2":       "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&h=600&fit=crop&crop=center",      // Sculpture gallery
  "gallery-3":       "https://images.unsplash.com/photo-1549490349-8643362247b5?w=800&h=600&fit=crop&crop=center",      // Abstract painting
  "gallery-4":       "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&h=600&fit=crop&crop=center",      // Gallery visitors
  "gallery-5":       "https://images.unsplash.com/photo-1574182245530-967d9b3831af?w=800&h=600&fit=crop&crop=center",      // Art installation
  "gallery-6":       "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop&crop=center",      // Photography exhibition

  // === CREATOR PORTRAITS ===
  "creator-1":       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",       // Man portrait
  "creator-2":       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",       // Woman portrait
  "creator-3":       "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop&crop=face",       // Young man portrait
  "creator-4":       "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",       // Young woman portrait
  "creator-5":       "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",       // Man portrait
  "creator-6":       "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",       // Woman portrait
  "creator-7":       "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face",       // Woman portrait
  "creator-8":       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",       // Man portrait

  // === EVENT IMAGES ===
  "event-dinner":    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop&crop=center",      // Dinner event
  "event-podcast":   "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop&crop=center",      // Podcast recording
  "event-brunch":    "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&h=500&fit=crop&crop=center",      // Brunch spread
  "event-art":       "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=800&h=500&fit=crop&crop=center",      // Art event
  "event-fashion":   "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&h=500&fit=crop&crop=center",      // Fashion show
  "event-jazz":      "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=500&fit=crop&crop=center",      // Jazz performance
  "event-drums":     "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=500&fit=crop&crop=center",      // Traditional drums

  // === EXHIBITION IMAGES ===
  "exhibit-gold":    "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop&crop=center",      // Gold artwork
  "exhibit-textile": "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=800&h=600&fit=crop&crop=center",      // Textile art
  "exhibit-photo":   "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=600&fit=crop&crop=center",      // Photography exhibit
  "exhibit-portrait":"https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&h=600&fit=crop&crop=center",     // Portrait art
  "exhibit-craft":   "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&h=600&fit=crop&crop=center",      // Craft objects
  "exhibit-agbada":  "https://images.unsplash.com/photo-1590736704728-f4730bb30770?w=800&h=600&fit=crop&crop=center",      // Traditional fashion
};

async function download(url, dest) {
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (compatible; CreatorsLodge/1.0)" },
    redirect: "follow",
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return buf.length;
}

async function main() {
  await mkdir(OUT, { recursive: true });

  const entries = Object.entries(CURATED);
  let done = 0;
  let skipped = 0;
  let failed = 0;

  console.log(`\n📥 Downloading ${entries.length} images to ${OUT}\n`);

  // Process in batches of 4 to avoid hammering
  for (let i = 0; i < entries.length; i += 4) {
    const batch = entries.slice(i, i + 4);
    await Promise.all(
      batch.map(async ([name, url]) => {
        const dest = join(OUT, `${name}.jpg`);
        // Skip if already exists and is > 10KB
        if (existsSync(dest)) {
          try {
            const st = await stat(dest);
            if (st.size > 10000) {
              skipped++;
              return;
            }
          } catch {}
        }
        try {
          const bytes = await download(url, dest);
          done++;
          const kb = (bytes / 1024).toFixed(0);
          console.log(`  ✅ ${name}.jpg  (${kb} KB)`);
        } catch (err) {
          failed++;
          console.error(`  ❌ ${name}.jpg  — ${err.message}`);
        }
      })
    );
  }

  console.log(`\n✨ Done: ${done} downloaded, ${skipped} skipped, ${failed} failed\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
