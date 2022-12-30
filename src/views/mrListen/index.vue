<template>
  <div class="mr-listen-page">
    <a-button class="mr-listen-create" type="primary" @click="create"> 新建MR监听 </a-button>
    <a-table class="mr-listen-table" :scroll="scroll" :columns="columns" :data="mrListens">
      <template #status="{ record }">
        <div class="mr-listen-status">
          <icon-font
            class="listen-icon"
            :class="{ 'can-trigger-icon': record.noticeStatus === 0 }"
            type="icon-start"
            :size="16"
          />
          <icon-font
            class="listen-icon"
            :class="{ 'can-trigger-icon': record.noticeStatus === 1 }"
            type="icon-stop"
            :size="16"
          />
        </div>
      </template>
    </a-table>
  </div>
</template>

<script lang="ts" setup>
import { queryAllMrListenInfo } from '@/api/mrListen'
import { TableColumnFixed } from '@/types/common'
import { MrListenInfo } from '@/types/mrListen'

const router = useRouter()

const scroll = {
  x: 1100,
}

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    width: 100,
  },
  {
    title: 'MR监听名称',
    dataIndex: 'name',
    width: 250,
  },
  {
    title: 'MR监听仓库',
    dataIndex: 'repository',
    width: 150,
  },
  {
    title: 'MR监听项目',
    dataIndex: 'projectId',
    width: 150,
  },
  {
    title: 'MR监听分支',
    dataIndex: 'branch',
    width: 150,
  },
  {
    title: '创建人',
    dataIndex: 'owner',
    width: 100,
  },
  {
    title: '状态',
    dataIndex: 'noticeStatus',
    fixed: 'right' as TableColumnFixed,
    width: 80,
    slotName: 'status',
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

  .mr-listen-table {
    .mr-listen-status {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .listen-icon {
        color: darkgray;
      }

      .can-trigger-icon {
        color: #333;
        cursor: pointer;

        &:hover {
          color: #0046ff;
        }
      }
    }
  }
}
</style>
