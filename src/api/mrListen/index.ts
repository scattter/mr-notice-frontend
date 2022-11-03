import { BaseMrListen, MrListenInfo } from '@/types/mrListen'
import { OriginResponse } from '@/types/response'
import { get, post } from '@/utils/request'

export const queryAllMrListenInfo = () => {
  return get<OriginResponse<Array<MrListenInfo>>, undefined>('/mr-listen/list')
}

export const createMrListen = (params: BaseMrListen) => {
  return post<OriginResponse<MrListenInfo>, BaseMrListen>('/mr-listen/create', params)
}
