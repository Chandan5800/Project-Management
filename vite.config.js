import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from 'vite-plugin-node-polyfills'; 

export default defineConfig({
  plugins: [react(), nodePolyfills],
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "window", // Define global as window for the browser
      },
    },
  },
  resolve: {
    alias: {
      buffer: "buffer",
      "@": path.resolve(__dirname, "./src"),
    },
  },
});