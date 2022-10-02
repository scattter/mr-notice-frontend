import { Pipeline } from '@/types/pipeline'
import { get, post } from '@/utils/request'

export const queryAllPipelineInfo = () => {
  return get('/pipeline/list')
}

export const createPipeline = (params: Pipeline) => {
  return post('/pipeline/create', params)
}
