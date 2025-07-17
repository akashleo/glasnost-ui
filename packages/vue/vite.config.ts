import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'
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
  plugins: [
    vue(), 
    dts({
      insertTypesEntry: true,
      copyDtsFiles: true
    }),
    copyCssPlugin()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GlasnostVue',
      fileName: (format) => `index.${format}.js`
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'style.css';
          return assetInfo.name || 'asset';
        }
      }
    }
  }
}) 