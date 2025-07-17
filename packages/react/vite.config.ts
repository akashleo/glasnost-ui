import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { writeFileSync } from 'fs'
import { glob } from 'glob'

// Custom plugin to copy CSS to dist folder
const copyCssPlugin = () => {
  return {
    name: 'copy-css',
    writeBundle() {
      // Find all CSS files in src
      const cssFiles = glob.sync('src/**/*.css')
      
      // Copy each CSS file to dist
      cssFiles.forEach(file => {
        const content = require('fs').readFileSync(file, 'utf-8')
        const outFile = file.replace('src/', 'dist/')
        writeFileSync(outFile, content)
      })
    }
  }
}

export default defineConfig({
  plugins: [react(), copyCssPlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GlasnostReact', 
      fileName: (format) => `index.${format}.js`
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'style.css';
          return assetInfo.name || 'asset'; // Add fallback string value
        }
      }
    }
  }
}) 