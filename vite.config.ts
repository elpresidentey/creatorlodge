import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-supabase": ["@supabase/supabase-js"],
          "vendor-query": ["@tanstack/react-query"],
          "vendor-ui": ["@radix-ui/react-dialog", "@radix-ui/react-toast", "sonner"],
        },
      },
    },
  },
  plugins: [
    react(),
    expressPlugin(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "robots.txt", "icons/*.png"],
      manifest: {
        name: "Creators Lounge — Dine, Work & Exhibit in Lagos",
        short_name: "Creators Lounge",
        description:
          "Private members' house in Lagos: restaurant, bar, ateliers, gallery walls and salons across VI, Yaba, Lekki, Ikoyi and Abuja.",
        theme_color: "#0E0E0F",
        background_color: "#0E0E0F",
        display: "standalone",
        orientation: "portrait",
        scope: "/",
        start_url: "/?source=pwa",
        categories: ["food", "lifestyle", "business"],
        icons: [
          { src: "icons/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icons/icon-512.png", sizes: "512x512", type: "image/png" },
          { src: "icons/maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
        ],
        shortcuts: [
          {
            name: "Reserve a salon",
            url: "/book?source=pwa-shortcut",
            icons: [{ src: "icons/icon-192.png", sizes: "192x192" }],
          },
          {
            name: "La Galerie",
            url: "/gallery?source=pwa-shortcut",
            icons: [{ src: "icons/icon-192.png", sizes: "192x192" }],
          },
          {
            name: "Carte & Bar",
            url: "/menu?source=pwa-shortcut",
            icons: [{ src: "icons/icon-192.png", sizes: "192x192" }],
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
        navigateFallback: "index.html",
        navigateFallbackDenylist: [/^\/api/],
        // House photos are first-party (same-origin /images/*), so responses
        // are real 200s — safe to cache for instant repeat views + offline.
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === self.location.origin && url.pathname.startsWith("/images/"),
            handler: "CacheFirst",
            options: {
              cacheName: "house-images-v1",
              expiration: { maxEntries: 100, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [200] },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "google-fonts-v2",
              networkTimeoutSeconds: 4,
              expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 30 },
              cacheableResponse: { statuses: [200] },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve",
    async configureServer(server) {
      const { createServer } = await import("./server/index.ts");
      const app = createServer();
      server.middlewares.use(app);
    },
  };
}
