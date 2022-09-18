import { mergeConfig } from 'vite'
import eslint from 'vite-plugin-eslint'

import BaseConfig from './vite.base.config'

// https://vitejs.dev/config/
export default mergeConfig(
  {
    mode: 'development',
    server: {
      port: 3001,
      hmr: true,
      proxy: {
        // 选项写法
        '/api/v1': {
          target: 'http://localhost:8001', // 所要代理的目标地址
          ws: true, // 支持websocket
          // rewrite: path => path.replace(/^\/search/, ''), // 重写传过来的path路径，比如 `/api/index/1?id=10&name=zs`（注意:path路径最前面有斜杠（/），因此，正则匹配的时候不要忘了是斜杠（/）开头的；选项的 key 也是斜杠（/）开头的）
          changeOrigin: true, // true/false, Default: false - changes the origin of the host header to the target URL
        },
      },
    },
    plugins: [
      // 用来配置eslint
      eslint({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules'],
      }),
    ],
  },
  BaseConfig
)
