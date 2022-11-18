import { RouteRecordRaw } from 'vue-router'

type TempRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean
}

export declare type CustomRouteRecordRaw = RouteRecordRaw & {
  hidden?: boolean
  children: TempRouteRecordRaw[]
}
