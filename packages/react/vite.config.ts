import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GlasnostReact',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@glasnost-ui/shared'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@glasnost-ui/shared': 'GlasnostShared'
        }
      }
    }
  }
}) 