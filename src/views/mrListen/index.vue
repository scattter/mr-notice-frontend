<template>
  <div class="mr-listen-page">
    <a-button class="mr-listen-create" type="primary" @click="create"> 新建MR监听 </a-button>
    <a-table class="mr-listen-table" :columns="columns" :data="mrListens" />
  </div>
</template>

<script lang="ts" setup>
import { queryAllMrListenInfo } from '@/api/mrListen'
import { MrListenInfo } from '@/types/mrListen'
const router = useRouter()

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'MR监听名称',
    dataIndex: 'name',
  },
  {
    title: '创建人',
    dataIndex: 'owner',
  },
  {
    title: 'MR监听仓库',
    dataIndex: 'repository',
  },
  {
    title: 'MR监听项目',
    dataIndex: 'projectId',
  },
  {
    title: 'MR监听分支',
    dataIndex: 'branch',
  },
]

const mrListens = ref<Array<MrListenInfo>>([])
const state = reactive({
  mrListens,
})

onMounted(async () => {
  await queryMrListenInfo()
})

const create = () => {
  router.push({
    name: 'mr-listen-create',
  })
}

const queryMrListenInfo = async () => {
  try {
    const res = await queryAllMrListenInfo()
    state.mrListens = res.result
    Message.success(res.message)
  } catch (e) {
    console.log(e)
  }
}
</script>

<style lang="scss" scoped>
.mr-listen-page {
  overflow-y: hidden;
  height: 100%;

  .mr-listen-create {
    margin-bottom: 20px;
  }
}
</style>
