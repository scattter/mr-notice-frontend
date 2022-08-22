import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { createStyleImportPlugin } from 'vite-plugin-style-import'
import AutoImport from 'unplugin-auto-import/vite'
import { visualizer } from "rollup-plugin-visualizer"
import Components from 'unplugin-vue-components/vite'
import {
  ArcoResolver
} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  server: {
    port: 3001,
    hmr: true,
    proxy: {
      // 选项写法
      '/api/v1': {
        target: 'http://localhost:8001', // 所要代理的目标地址
        ws: true, // 支持websocket
        // rewrite: path => path.replace(/^\/search/, ''), // 重写传过来的path路径，比如 `/api/index/1?id=10&name=zs`（注意:path路径最前面有斜杠（/），因此，正则匹配的时候不要忘了是斜杠（/）开头的；选项的 key 也是斜杠（/）开头的）
        changeOrigin: true,  // true/false, Default: false - changes the origin of the host header to the target URL
      }
    }
  },
  plugins: [
    vue(),
    // visualizer({
    //   open: true,
    //   gzipSize: true,
    //   brotliSize: true,
    // }),
    createStyleImportPlugin({
      libs: [
        {
          libraryName: '@arco-design/web-vue',
          esModule: true,
          resolveStyle: (name) => {
            // less
            return `@arco-design/web-vue/es/${name}/style/index.js`
          },
        }
      ]
    }),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      dts: './auto-imports.d.ts', // or a custom path
      imports: [
        // presets
        'vue',
        'vue-router',
      ],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
    Components({
      dirs: ['src'], // Avoid parsing src/components.  避免解析到src/components
      deep: false,
      resolvers: [ArcoResolver()],
    })
  ],
  build: {
    outDir: './dist',
    rollupOptions: {
      output: {
        // manualChunks: {
        //   arco: ['@arco-design/web-vue'],
        // },
        manualChunks(id) {
          // 将pinia的全局库实例打包进vendor，避免和页面一起打包造成资源重复引入
          if (id.includes(resolve(__dirname, '/src/store/index.ts'))) {
            return 'store_vendor';
          }
          if (id.includes('@arco-design/web-vue')) {
            return 'arco';
          }
        }
      },
    },
    chunkSizeWarningLimit: 1024,
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
            'src/assets/style/breakpoint.less'
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
})
