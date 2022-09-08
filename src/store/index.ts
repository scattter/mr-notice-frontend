import { useMainStore } from '@/store/main'
export interface IAppStore {
  useMainStore: ReturnType<typeof useMainStore>
}

export const appStore: IAppStore = {} as IAppStore

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.useMainStore = useMainStore()
}

export default appStore

// 作者：南山种子外卖跑手
// 链接：https://juejin.cn/post/7057439040911441957
//   来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
