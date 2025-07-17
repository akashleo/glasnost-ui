import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'
import { writeFileSync, readFileSync } from 'fs'
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
        const content = readFileSync(file, 'utf-8')
        const outFile = file.replace('src/', 'dist/')
        writeFileSync(outFile, content)
      })
    }
  }
}

export default defineConfig({
  plugins: [
    svelte(),
    copyCssPlugin()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GlasnostSvelte',
      fileName: (format) => `index.${format === 'es' ? 'esm' : format}.js`,
      formats: ['es', 'cjs']
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: ['svelte'],
      output: {
        globals: {
          svelte: 'Svelte'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'style.css';
          return assetInfo.name || 'asset';
        }
      }
    },
    sourcemap: true,
    minify: false
  }
}) 