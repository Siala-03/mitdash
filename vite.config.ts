import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Raise warning threshold — framer-motion is inherently large
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        // Split large deps into separate cached chunks so returning visitors
        // don't re-download unchanged vendor code on each deploy
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['lucide-react', 'react-icons'],
        },
      },
    },
  },
})
