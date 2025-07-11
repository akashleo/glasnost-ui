import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@glasnost/shared': '../../packages/shared/src',
      '@glasnost/vue': '../../packages/vue/src'
    }
  },
  server: {
    port: 3000,
    host: true
  }
}) 