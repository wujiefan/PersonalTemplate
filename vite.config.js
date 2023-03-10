import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import UnoCSS from "unocss/vite"
import presetUno from '@unocss/preset-uno'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      presets:[presetUno()]
    }),
  ],
  resolve:{
    alias:{
      '@': path.resolve(__dirname, './src')
    }
  }
})
