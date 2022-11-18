import { MrListenInfo, NewMrListenInfo } from '@/types/mrListen'
import { OriginResponse } from '@/types/response'
import { get, post } from '@/utils/request'

export const queryAllMrListenInfo = () => {
  return get<OriginResponse<Array<MrListenInfo>>, undefined>('/mr-listen/list')
}

export const createMrListen = (params: NewMrListenInfo) => {
  return post<OriginResponse<MrListenInfo>, NewMrListenInfo>('/mr-listen/create', params)
}
