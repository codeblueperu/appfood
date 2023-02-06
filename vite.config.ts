import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

const resolvePath = (dir: string) => {
  return path.resolve(__dirname, 'src', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  root: "./",
  base: "/",
  publicDir: "public",
  build: {
    outDir: "appfood",
    assetsDir: "assets"
  },
  plugins: [vue()],
  resolve:{
    alias:{
      assets: resolvePath('assets'),
      components: resolvePath('components'),
      modules: resolvePath('modules'),
      services: resolvePath('data'),
      '@' : path.resolve(__dirname, './src')
    }
  }
})
