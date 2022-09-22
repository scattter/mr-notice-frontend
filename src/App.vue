<script lang="ts" setup>
import { storeToRefs } from 'pinia'

import { useMainStore } from '@/store/main.ts'

const mainStore = useMainStore()
const { globalLoading } = storeToRefs(mainStore)
</script>

<template>
  <a-spin :loading="globalLoading" dot>
    <router-view />
  </a-spin>
</template>
