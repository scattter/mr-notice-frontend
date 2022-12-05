import { CustomRouteRecordRaw } from '@/types/common'

const LAYOUT = () => import('@/layout/index.vue')
const DASHBOARD = () => import('@/views/dashboard/index.vue')

export const appRoutes: CustomRouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: LAYOUT,
    redirect: {
      name: 'summary',
    },
    meta: {
      locale: '项目工作台',
      icon: 'icon-apps',
      order: 1,
    },
    children: [
      {
        path: 'summary',
        name: 'summary',
        component: DASHBOARD,
        meta: {
          locale: '概览',
          activeMenu: 'summary',
        },
      },
      {
        path: 'mr-listen',
        name: 'mr-listen',
        component: () => import('@/views/mrListen/index.vue'),
        meta: {
          locale: 'MR监听',
          activeMenu: 'mr-listen',
        },
      },
      {
        path: 'mr-listen-create',
        name: 'mr-listen-create',
        hidden: true,
        component: () => import('@/views/mrListen/createMrListen.vue'),
        meta: {
          locale: 'MR监听',
          activeMenu: 'mr-listen',
        },
      },
    ],
  },
]
