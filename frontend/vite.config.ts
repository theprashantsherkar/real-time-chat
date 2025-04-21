import path from "path";
import tsconfigPaths from "vite-tsconfig-paths"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      // eslint-disable-next-line no un-def
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
