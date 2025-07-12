import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig({
  plugins: [svelte({
    compilerOptions: {
      customElement: false
    }
  })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'GlasnostSvelte',
      fileName: (format) => `index.${format === 'es' ? 'esm' : format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: ['svelte', '@glasnost-ui/shared'],
      output: {
        globals: {
          svelte: 'Svelte',
          '@glasnost-ui/shared': 'GlasnostShared'
        }
      }
    },
    sourcemap: true,
    minify: false
  }
}) 