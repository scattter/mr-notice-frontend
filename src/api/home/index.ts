import { post } from '@/utils/request'

export const register = (params: object) => {
  return post('/users/register', params)
}

export const login = (params: object) => {
  return post('/users/login', params)
}
