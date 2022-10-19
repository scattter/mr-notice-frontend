// import '@arco-design/web-vue/dist/arco.css'
import './index.css'

// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import { createApp } from 'vue'

import { registerStore } from '@/store/index.ts'

import App from './App.vue'
import router from './route'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPersist)

app.use(pinia)
// 注册pinia状态管理库
registerStore()
app.use(router)
app.use(ArcoVueIcon)
app.mount('#app')
