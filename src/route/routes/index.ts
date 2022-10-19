const LAYOUT = () => import('@/layout/index.vue')
const DASHBOARD = () => import('@/views/dashboard/index.vue')

export const DEFAULT_PATH = 'login'
export const appRoutes = [
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
        path: 'pipeline',
        name: 'pipeline',
        component: () => import('@/views/pipeline/index.vue'),
        meta: {
          locale: '流水线',
          activeMenu: 'pipeline',
        },
      },
    ],
  },
]
