export interface BaseMrListen {
  name: string
  owner: string
  address: string
  branch: string
}

export interface MrListenInfo extends BaseMrListen {
  id: number
  createdAt: string
  updatedAt: string
}
