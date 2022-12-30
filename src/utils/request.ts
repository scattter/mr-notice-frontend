import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import appStore from '@/store'
import { ResponseCode } from '@/types/common'
import { goBackLoginPage } from '@/utils/common'

const Config = {
  baseURL: '/api/v1',
}

const service: AxiosInstance = axios.create({
  timeout: 100 * 10,
  ...Config,
})

service.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    // 产品集视图中必须是登录后访问，因此肯定存在token
    const { userInfo } = appStore.useMainStore
    if (!config.headers) config.headers = {}
    Object.assign(config.headers, {
      common: {
        Authorization: userInfo.token,
      },
    })
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const { code } = response.data
    if (code === ResponseCode.success) {
      return response
    }
  },
  error => {
    const { code } = error.response.data
    if (code === ResponseCode.unAuthority) {
      goBackLoginPage()
    }
    Message.error(error?.response?.data?.message || '服务器内部错误')
    return Promise.reject(error?.response)
  }
)

export default service

export function get<T, D>(url: string, params?: D, config?: AxiosRequestConfig): Promise<T> {
  const promise = service.get<T, AxiosResponse<T>, D>(url, {
    params,
    ...config,
  })
  return convertAxiosResponse(promise)
}

export function post<T, D>(url: string, params?: D, config?: AxiosRequestConfig): Promise<T> {
  const promise = service.post<T, AxiosResponse<T>, D>(url, params, config)
  return convertAxiosResponse(promise)
}

/**
 * @param axiosPromise AxiosResponse<T>
 */
function convertAxiosResponse<T>(axiosPromise: Promise<AxiosResponse<T>>): Promise<T> {
  return new Promise(function (resolve, reject) {
    axiosPromise
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}

// 作者：冬季穿短裤
// 链接：https://juejin.cn/post/7067511717122539527
//   来源：稀土掘金
