<template>
  <div class="pipeline-page">
    <a-table :columns="columns" :data="state.data" />
  </div>
</template>

<script lang="ts" setup>
import { queryAllPipelineInfo } from '@/api/pipeline'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '流水线名称',
    dataIndex: 'pipeline_name',
  },
  {
    title: '创建人',
    dataIndex: 'admin',
  },
  {
    title: '关联仓库',
    dataIndex: 'relate_repo',
  },
  {
    title: '关联分支',
    dataIndex: 'relate_branch',
  },
]
const state = reactive({
  data: [],
})

onMounted(async () => {
  state.data = await queryAllPipelineInfo()
})
</script>
