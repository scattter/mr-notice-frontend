import { resolve } from 'path'
import { mergeConfig } from 'vite'

import configVisualizerPlugin from '../plugins/visualizer'
import BaseConfig from './vite.base.config'

export default mergeConfig(
  {
    mode: 'production',
    plugins: [configVisualizerPlugin()],
    build: {
      outDir: './dist',
      rollupOptions: {
        output: {
          // 拆分打包文件目录
          assetFileNames: (assetInfo: { name: string }) => {
            const info = assetInfo.name.split('.')
            let extType = info[info.length - 1]
            if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
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
          manualChunks: {
            arco: ['@arco-design/web-vue'],
            vue: ['vue', 'vue-router', 'pinia'],
            store_vendor: [`${resolve(__dirname, '/src/store/index.ts')}`],
          },
        },
      },
      chunkSizeWarningLimit: 1024,
    },
  },
  BaseConfig
)
