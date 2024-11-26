import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Esto es importante para Vercel
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})