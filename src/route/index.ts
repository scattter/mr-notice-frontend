import 'nprogress/nprogress.css'

// @ts-ignore
import NProgress from 'nprogress' // progress bar
import { createRouter, createWebHistory } from 'vue-router'

import { filteredRouter } from '@/utils/sideBar'

// import createRouteGuard from './guard'
import { appRoutes } from './routes'
const DEFAULT_PAGE = () => import('@/views/login/index.vue')
const DEFAULT_PATH = '/login'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: {
        name: 'login',
        path: DEFAULT_PATH,
      },
      children: [
        {
          path: 'login',
          name: 'login',
          component: DEFAULT_PAGE,
        },
      ],
    },
    ...filteredRouter(appRoutes),
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/notFound/index.vue'),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
