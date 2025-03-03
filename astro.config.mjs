import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

export default defineConfig({
  output: "static", // 🔹 Necesario para despliegue en Firebase Hosting
  integrations: [tailwind(), react()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/global.css";`
        }
      }
    }
  }
});
