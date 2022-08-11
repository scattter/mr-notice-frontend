import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
  state: () => {
    return {
      count: 0,
      phone: '18323243334',
    }
  },
  getters: {
    phoneHidden(state) {
      return state.phone.toString().replace(/^(\d{3})\d{4}(\d{4})/, '$1****$2')
    },
  },
  actions: {
    changeCount() {
      this.count++
    },
  },
})
