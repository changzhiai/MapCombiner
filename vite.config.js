import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3003,
  },
  preview: {
    port: 3003,
    allowedHosts: ['mapcombiner.travel-tracker.org']
  }
})
