import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    // ...
    host: "localhost",
    port: 3000, 
  },
  plugins: [react()],
});
