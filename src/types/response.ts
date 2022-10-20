export interface OriginResponse<T = any> {
  code: number
  message: string
  result: T
}
