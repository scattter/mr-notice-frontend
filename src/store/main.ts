import { defineStore } from 'pinia'

export const useMainStore = defineStore(
  'main',
  () => {
    const globalLoading = ref<boolean>(false)
    const globalToken = ref<string>('')

    function updateLoadingState(val: boolean) {
      globalLoading.value = val
    }

    function updateToken(val: string) {
      globalToken.value = val
    }

    return { globalLoading, updateLoadingState, globalToken, updateToken }
  },
  {
    persist: {
      enabled: true,
      strategies: [{ storage: localStorage, paths: ['globalToken'] }],
    },
  }
)
