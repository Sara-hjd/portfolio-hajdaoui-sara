import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Alias @ → src/ pour des imports propres
      // Ex: import { personal } from '@/data/personal'
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    // Génère des sourcemaps pour le débogage en production
    sourcemap: false,
    // Taille limite d'avertissement pour les chunks (en kB)
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        // Séparation des chunks pour un meilleur cache navigateur
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: false,
  },
})
