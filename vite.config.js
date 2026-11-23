import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Site com duas páginas: início e política de privacidade (LGPD).
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        privacidade: resolve(import.meta.dirname, 'privacidade.html'),
      },
    },
  },
})
