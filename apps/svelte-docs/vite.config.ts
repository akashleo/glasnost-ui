import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '@glasnost/shared': resolve(__dirname, '../../packages/shared/src/index.ts'),
      '@glasnost/svelte': resolve(__dirname, '../../packages/svelte/src/index.ts')
    }
  },
  server: {
    port: 3002,
    host: true
  }
}) 