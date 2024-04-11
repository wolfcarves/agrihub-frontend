import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./",

  server: {
    watch: {
      usePolling: true
    }
  },

  build: {
    outDir: "dist/",
    rollupOptions: {
      input: {
        main: "index.html"
      }
    }
  },

  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "src/api"),
      "@auth": path.resolve(__dirname, "src/auth"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@axios": path.resolve(__dirname, "src/axios"),
      "@components-ui": path.resolve(__dirname, "src/components/ui/index.tsx"),
      "@components": path.resolve(__dirname, "src/components"),
      "@higher-order": path.resolve(__dirname, "src/higher-order"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@lib": path.resolve(__dirname, "src/components/lib"),
      "@router": path.resolve(__dirname, "src/router"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@icons": path.resolve(__dirname, "src/icons"),
      "@providers": path.resolve(__dirname, "src/providers"),
      "@svg": path.resolve(__dirname, "src/svg")
    }
  },

  plugins: [
    react(),
    reactRefresh(),
    VitePWA({
      injectRegister: false,
      manifest: {
        name: "AgriHub",
        short_name: "AgriHub",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#000000",
        display: "standalone",
        icons: [
          {
            src: "/agrihub-192-192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/agrihub-512-512.png",
            type: "image/png",
            sizes: "512x512"
          }
        ]
      },
      registerType: "autoUpdate",
      workbox: {
        importScripts: ["./sw.js"],
        clientsClaim: true,
        skipWaiting: true
      },
      devOptions: {
        enabled: true,
        type: "module"
      }
    })
  ]
});
