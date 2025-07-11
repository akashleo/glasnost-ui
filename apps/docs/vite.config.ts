import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@glasnost/shared': '../../packages/shared/src/index.ts',
      '@glasnost/vue': '../../packages/vue/src/index.ts',
      '@glasnost/shared/styles.css': '../../packages/shared/dist/styles.css'
    }
  },
  server: {
    port: 3000,
    host: true
  }
}) 