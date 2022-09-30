import { get } from '@/utils/request'

export const queryAllPipelineInfo = () => {
  return get('/pipeline/list').then(res => res.result)
}
