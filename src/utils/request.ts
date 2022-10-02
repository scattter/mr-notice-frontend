import { Message } from '@arco-design/web-vue'
import axios from 'axios'

import appStore from '@/store'

const Config = {
  baseURL: '/api/v1',
}

const service = axios.create({
  timeout: 100 * 10,
  ...Config,
})

service.interceptors.request.use(
  config => {
    // 产品集视图中必须是登录后访问，因此肯定存在token
    const { userInfo } = appStore.useMainStore
    config.headers.common['Authorization'] = userInfo.token
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 10000) {
      return res
    }
  },
  error => {
    Message.error(error?.response?.data?.message || '服务器内部错误')
    return Promise.reject(
      error?.response?.data !== ''
        ? error.response.data
        : {
            code: 10005,
            message: '服务器内部错误',
            result: '',
          }
    )
  }
)

export default service

export function get(url: string, params?: object, config?: object) {
  return service.get(url, {
    params,
    ...config,
  })
}

export function post(url: string, params?: object, config?: object) {
  return service.post(url, params, config)
}
