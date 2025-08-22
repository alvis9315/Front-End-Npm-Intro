import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dts: true,
    }),
    Components({
      resolvers: [NaiveUiResolver()],
      dts: true,
    }),
  ],
  base: '/Front-End-Npm-Intro/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
