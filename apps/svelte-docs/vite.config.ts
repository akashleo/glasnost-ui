import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '@glasnost-ui/shared': resolve(__dirname, '../../packages/shared/src'),
      '@glasnost-ui/svelte': resolve(__dirname, '../../packages/svelte/src')
    }
  },
  server: {
    port: 3002,
    host: true
  }
}) 