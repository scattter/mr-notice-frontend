import { OriginResponse } from '@/types/response'
import { User } from '@/types/user'
import { post } from '@/utils/request'

export const register = (params: object) => {
  return post<OriginResponse<User>, object>('/users/register', params)
}

export const login = (params: object) => {
  return post<OriginResponse<User>, object>('/users/login', params)
}
