import { RouteRecordRaw } from 'vue-router'

type TempRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean
}

export declare type CustomRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean
  children: TempRouteRecordRaw[]
}

export enum ResponseCode {
  success = 10000,
  unAuthority = 10002,
}
