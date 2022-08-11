import '@arco-design/web-vue/dist/arco.css'

import ArcoVue from '@arco-design/web-vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(ArcoVue, {
  // 用于改变使用组件时的前缀名称
  componentPrefix: 'a',
})
app.mount('#app')
