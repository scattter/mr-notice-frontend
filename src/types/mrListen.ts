export interface BaseMrListen {
  name: string
  owner: string
  repository: string
  projectId: string | number
}

export interface MrListenInfo extends BaseMrListen {
  id: number
  createdAt: string
  updatedAt: string
}

export interface NewMrListenInfo extends BaseMrListen {
  noticeType: string
  noticeAddress: string
}

export interface NewMrListenStep {
  id: number
  topic: string
  des: string
}
