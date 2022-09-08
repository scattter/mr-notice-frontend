<script lang="ts" setup>
// import Layout from '@/layout/index.vue'
import {storeToRefs} from "pinia";

import { useMainStore } from '@/store/main.ts'
import Home from '@/views/login/index.vue'

const mainStore = useMainStore()
const { globalLoading } = storeToRefs(mainStore)
</script>

<template>
  <a-spin :loading="globalLoading" dot>
<!--    <Home />-->
    <router-view />
  </a-spin>
</template>
