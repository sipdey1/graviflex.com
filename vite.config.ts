

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import _default from 'tailwindcss/colors'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: '/graviflex.com/',
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve (__dirname, 'index.html'),
        shop: resolve(__dirname , 'shop.html'),
        contact: resolve(__dirname, 'contact.html'),
        signup: resolve(__dirname, 'signup.html'),
       
      },
    },
  },
})







