import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/visuplate-website/",
  build: {
    outDir: "docs",   // 👈 IMPORTANT: GitHub Pages can deploy from /docs
  },
});