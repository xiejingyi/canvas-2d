import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // 添加 Tailwind CSS v4 插件
  ],
  resolve: {
    // 配置别名
    alias: {
      // __dirname 指向当前配置文件所在目录（项目根目录）
      // path.resolve(__dirname, 'src') 拼接出src目录的绝对路径
      '@': path.resolve(__dirname, 'src')
    }
  }
})
