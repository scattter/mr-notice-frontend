import '@arco-design/web-vue/dist/arco.css'
import './index.css'

import ArcoVue from '@arco-design/web-vue'
// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import { registerStore } from '@/store/index.ts'

import App from './App.vue'
import router from './route'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
// 注册pinia状态管理库
registerStore()
app.use(router)
app.use(ArcoVue, {
  // 用于改变使用组件时的前缀名称
  componentPrefix: 'a',
})
app.use(ArcoVueIcon)
app.mount('#app')
