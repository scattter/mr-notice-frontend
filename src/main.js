// import '@arco-design/web-vue/dist/arco.css'
import './index.css'

// 额外引入图标库
import { Icon } from '@arco-design/web-vue'
// import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import { createApp } from 'vue'

import { registerStore } from '@/store/index.ts'

import App from './App.vue'
import router from './route'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersist)

const IconFont = Icon.addFromIconFontCn({
  src: 'https://at.alicdn.com/t/c/font_1874562_xnm63l4suwd.js',
})
app.component('IconFont', IconFont)

app.use(pinia)
// 注册pinia状态管理库
registerStore()
app.use(router)
// app.use(ArcoVueIcon)
app.mount('#app')
