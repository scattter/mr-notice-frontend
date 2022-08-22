import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const globalLoading = ref<boolean>(false)

  function updateLoadingState(val: boolean) {
    globalLoading.value = val
  }

  return { globalLoading, updateLoadingState }
})
