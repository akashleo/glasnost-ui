import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@glasnost-ui/react': resolve(__dirname, '../../packages/react/src/index.ts'),
      '@glasnost-ui/react/styles': resolve(__dirname, '../../packages/react/src/index.css')
    }
  },
  server: {
    port: 3001,
    host: true
  }
}) 