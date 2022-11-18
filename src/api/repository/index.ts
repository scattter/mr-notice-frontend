import { BaseProjectInfo, RepositoryCreate } from '@/types/repository'
import { OriginResponse } from '@/types/response'
import { get } from '@/utils/request'

export const queryAllRepository = () => {
  return get<OriginResponse<Array<RepositoryCreate>>, undefined>('/repository/list')
}

export const queryAllProject = (params: { name: string }) => {
  return get<OriginResponse<BaseProjectInfo>, { name: string }>('/repository/projects', params)
}
