import { resolve } from 'path'
import { mergeConfig } from 'vite'

import configVisualizerPlugin from '../plugins/visualizer'
import BaseConfig from './vite.base.config'

// https://vitejs.dev/config/
export default mergeConfig(
  {
    mode: 'production',
    plugins: [configVisualizerPlugin()],
    build: {
      outDir: './dist',
      rollupOptions: {
        output: {
          // manualChunks: {
          //   arco: ['@arco-design/web-vue'],
          // },
          // 拆分打包文件目录
          assetFileNames: (assetInfo: { name: string }) => {
            const info = assetInfo.name.split('.')
            let extType = info[info.length - 1]
            if (
              /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)
            ) {
              extType = 'media'
            } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
              extType = 'img'
            } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
              extType = 'fonts'
            }
            return `static/${extType}/[name]-[hash][extname]`
          },
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          manualChunks(id: string) {
            // 将pinia的全局库实例打包进vendor，避免和页面一起打包造成资源重复引入
            if (id.includes(resolve(__dirname, '/src/store/index.ts'))) {
              return 'store_vendor'
            }
            if (id.includes('@arco-design/web-vue')) {
              const names = id.split('/')
              // const name =
              //   names[names.length - 2] + '-' + names[names.length - 1]
              if (names[names.length - 3] === 'icon') return `arco/icons`
              // return `arco/components/${name}`
              return '@arco-design/web-vue'
            }
          },
        },
      },
      chunkSizeWarningLimit: 1024,
    },
  },
  BaseConfig
)
