import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "src/api"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@axios": path.resolve(__dirname, "src/axios"),
      "@components": path.resolve(__dirname, "src/components"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@router": path.resolve(__dirname, "src/router"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@icons": path.resolve(__dirname, "src/icons"),
      "@providers": path.resolve(__dirname, "src/providers")
    }
  },
  envDir: "../../",
  plugins: [react()]
});
