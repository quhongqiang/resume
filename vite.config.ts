import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/resume/',
  build: {
    outDir: 'dist', // 打包输出文件夹
    assetsDir: 'assets'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})


