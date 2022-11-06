<script lang="tsx">
import { compile, defineComponent, h } from 'vue'
import { RouteRecordRaw } from 'vue-router'

import { appRoutes } from '@/route/routes'
// import { openWindow, regexUrl } from '@/utils/sideBar'

export default defineComponent({
  setup() {
    const router = useRouter()
    // 当前选中路由
    // const openKeys = ref<string[]>([])
    const selectedKeys = ref<string[]>([])

    // 获取路由
    const routes = computed(() => {
      return [...appRoutes]
    })

    // 点击侧边栏时正常进行跳转
    const goto = (route: RouteRecordRaw) => {
      // console.log('====')
      // if (regexUrl.test(route.path)) {
      //   console.log('---')
      //   openWindow(route.path)
      //   selectedKeys.value = [route.name as string]
      //   return
      // }
      // openWindow(route.path)
      // selectedKeys.value = ['流水线']
      router.push({
        name: route.name,
      })
    }

    // 渲染子项
    const renderMenu = () => {
      function render(routes: RouteRecordRaw[], nodes = []) {
        routes.forEach(route => {
          const icon = route?.meta?.icon ? () => h(compile(`<${route?.meta?.icon} />`)) : null
          const node =
            route?.children && Array.isArray(route.children) && route.children.length !== 0 ? (
              <a-sub-menu
                key={route.name}
                v-slots={{
                  icon,
                  title: () => h(compile((route?.meta?.locale as string) || '')),
                }}
              >
                {render(route.children)}
              </a-sub-menu>
            ) : (
              <a-menu-item key={route?.name} v-slots={{ icon }} onClick={() => goto(route)}>
                {route?.meta?.locale || ''}
              </a-menu-item>
            )
          nodes.push(node as never)
        })
        return nodes
      }
      return render(routes.value)
    }

    return () => (
      <a-menu open-keys={['dashboard']} selected-keys={selectedKeys.value}>
        {renderMenu()}
      </a-menu>
    )
  },
})
</script>

<style lang="less" scoped>
:deep(.arco-menu-inner) {
  .arco-menu-inline-header {
    display: flex;
    align-items: center;
  }

  .arco-icon {
    &:not(.arco-icon-down) {
      font-size: 18px;
    }
  }
}
</style>
