import { BasePipeline, PipelineInfo } from '@/types/pipeline'
import { OriginResponse } from '@/types/response'
import { get, post } from '@/utils/request'

export const queryAllPipelineInfo = () => {
  return get<OriginResponse<Array<PipelineInfo>>, undefined>('/pipeline/list')
}

export const createPipeline = (params: BasePipeline) => {
  return post<OriginResponse<PipelineInfo>, BasePipeline>('/pipeline/create', params)
}
