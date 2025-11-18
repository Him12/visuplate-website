import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/visuplate-website/", // 👈 REQUIRED FOR GITHUB PAGES
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
