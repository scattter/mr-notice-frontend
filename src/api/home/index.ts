import { post } from '@/utils/request'

export const register = (params: object) => {
  return post('/users/register', params)
}
