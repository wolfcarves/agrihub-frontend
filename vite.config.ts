import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "src/api"),
      "@auth": path.resolve(__dirname, "src/auth"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@axios": path.resolve(__dirname, "src/axios"),
      "@components-ui": path.resolve(__dirname, "src/components/index.tsx"),
      "@higher-order": path.resolve(__dirname, "src/higher-order"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@router": path.resolve(__dirname, "src/router"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@icons": path.resolve(__dirname, "src/icons"),
      "@providers": path.resolve(__dirname, "src/providers")
    }
  },
  envDir: "../../",
  plugins: [react()]
});
