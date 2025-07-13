import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@glasnost-ui/shared': '../../packages/shared/src/index.ts',
      '@glasnost-ui/vue': '../../packages/vue/src/index.ts'
    }
  },
  server: {
    port: 3000,
    host: true
  }
}) 