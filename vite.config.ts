import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Configuración del proxy para evitar problemas de CORS
      "/api/search": {
        target: "https://inventory-ontology-server.onrender.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/search/, "/api/search"),
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@assets": "/src/assets",
      "@services": "/src/services",
    },
    
  },
})
