import { defineStore } from 'pinia'

import { User } from '@/types/user'

export const useMainStore = defineStore(
  'main',
  () => {
    const globalLoading = ref<boolean>(false)
    const userInfo = ref<User>({
      id: undefined,
      name: '',
      token: '',
    })

    function updateLoadingState(val: boolean) {
      globalLoading.value = val
    }

    function updateUserInfo(val: string) {
      userInfo.value = val
    }

    return { globalLoading, updateLoadingState, userInfo, updateUserInfo }
  },
  {
    persist: {
      enabled: true,
      strategies: [{ storage: localStorage, paths: ['userInfo'] }],
    },
  }
)
