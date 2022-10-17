import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
// import { ArcoResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'

import { arcoResolver } from '../plugins/arcoResolver'
import configStyleImportPlugin from '../plugins/styleImport'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, '../../src'), // 这里拆分配置后根目录发生了变化
      },
      // 这里是为了解决menu render的编译问题
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js', // compile template
      },
    ],
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      // 这里的按需加载和官网上的一样, 和arco-pro默认配置的有出入(commit: b628eea8和arco-pro一致)
      // resolvers: [ArcoResolver()],
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      dts: './auto-imports.d.ts', // or a custom path
      imports: [
        // presets
        'vue',
        'vue-router',
        {
          '@arco-design/web-vue': ['Message'],
        },
      ],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
    arcoResolver(),
    configStyleImportPlugin(), // 按需导入样式
  ],
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
