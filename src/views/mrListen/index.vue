<template>
  <div class="mr-listen-page">
    <a-button class="mr-listen-create" type="primary" @click="create"> 新建MR监听 </a-button>
    <a-table class="mr-listen-table" :columns="columns" :data="mrListens" />
    <a-modal v-model:visible="state.dialogVisible" @ok="handleOk" @cancel="handleCancel">
      <template #title> 新建 </template>
      <div class="create-dialog-content">
        <a-form :model="form" :style="{ width: '480px' }">
          <a-form-item field="name" label="监听名称" validate-trigger="input" required>
            <a-input v-model="form.name" placeholder="请输入MR监听名称" />
            <template #extra>
              <div>MR监听名称, 唯一标识</div>
            </template>
          </a-form-item>
          <a-form-item field="address" label="仓库地址" validate-trigger="input" required>
            <a-input v-model="form.address" placeholder="请输入MR监听仓库地址" />
            <template #extra>
              <div>MR监听仓库</div>
            </template>
          </a-form-item>
          <a-form-item field="projectId" label="项目ID" validate-trigger="input" required>
            <a-input v-model="form.projectId" placeholder="请输入MR监听项目id" />
          </a-form-item>
          <a-form-item field="branch" label="监听分支" validate-trigger="input">
            <a-input v-model="form.branch" placeholder="请输入MR监听分支" />
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { createMrListen, queryAllMrListenInfo } from '@/api/mrListen'
import appStore from '@/store'
import { MrListenInfo } from '@/types/mrListen'
const { userInfo } = appStore.useMainStore

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
    dataIndex: 'address',
  },
  {
    title: 'MR监听分支',
    dataIndex: 'branch',
  },
]

const initForm = {
  name: '',
  owner: userInfo.user_name,
  address: '',
  projectId: '',
  branch: '',
}

const form = reactive({ ...initForm })

// 初始化方法
const resetForm = () => {
  Object.assign(form, initForm)
}

const mrListens = ref<Array<MrListenInfo>>([])
const state = reactive({
  dialogVisible: false,
  mrListens,
})

onMounted(async () => {
  await queryMrListenInfo()
})

const create = () => {
  state.dialogVisible = true
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

const handleOk = async () => {
  try {
    await createMrListen(form)
    Message.success('创建成功')
    await queryMrListenInfo()
  } catch (e) {
    console.log(e)
  }
  handleCancel()
  resetForm()
}

const handleCancel = () => {
  state.dialogVisible = false
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
