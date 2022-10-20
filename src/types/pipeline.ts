export interface BasePipeline {
  pipelineName: string
  admin: string
  relateRepo: string
  relateBranch: string
}

export interface PipelineInfo extends BasePipeline {
  id: number
  createdAt: string
  updatedAt: string
}
