import { resolve } from 'path'
import { mergeConfig } from 'vite'

import { arcoResolver } from '../plugins/arcoResolver'
import configStyleImportPlugin from '../plugins/styleImport'
import configVisualizerPlugin from '../plugins/visualizer'
import BaseConfig from './vite.base.config'

// https://vitejs.dev/config/
export default mergeConfig(
  {
    mode: 'production',
    plugins: [
      arcoResolver(),
      configStyleImportPlugin(),
      configVisualizerPlugin(),
    ],
    build: {
      outDir: './dist',
      rollupOptions: {
        output: {
          // manualChunks: {
          //   arco: ['@arco-design/web-vue'],
          // },
          manualChunks(id: string) {
            // 将pinia的全局库实例打包进vendor，避免和页面一起打包造成资源重复引入
            if (id.includes(resolve(__dirname, '/src/store/index.ts'))) {
              return 'store_vendor'
            }
            if (id.includes('@arco-design/web-vue')) {
              return 'arco'
            }
          },
        },
      },
      chunkSizeWarningLimit: 1024,
    },
  },
  BaseConfig
)
