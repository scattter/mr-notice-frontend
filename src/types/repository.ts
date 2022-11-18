export interface BaseRepository {
  name: string
  owner: string
  address: string
}

export interface RepositoryList extends BaseRepository {
  id: number
}

export interface RepositoryCreate extends BaseRepository {
  token: string
}

export interface BaseProjectInfo {
  name: string
  value: number | string
  url: string
}
