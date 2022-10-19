<template>
  <div class="pipeline-page">
    <a-button class="pipeline-create" type="primary" @click="create">
      新建流水线
    </a-button>
    <a-table class="pipeline-table" :columns="columns" :data="state.data" />
    <a-modal
      v-model:visible="state.dialogVisible"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <template #title> 新建 </template>
      <div class="create-dialog-content">
        <a-form :model="form" :style="{ width: '480px' }">
          <a-form-item
            field="pipelineName"
            label="流水线名称"
            validate-trigger="input"
            required
          >
            <a-input
              v-model="form.pipelineName"
              placeholder="请输入流水线名称"
            />
            <template #extra>
              <div>流水线名称, 唯一标识</div>
            </template>
          </a-form-item>
          <a-form-item
            field="relateRepo"
            label="关联仓库"
            validate-trigger="input"
            required
          >
            <a-input v-model="form.relateRepo" placeholder="请输入关联仓库" />
            <template #extra>
              <div>监听MR的仓库</div>
            </template>
          </a-form-item>
          <a-form-item
            field="relateBranch"
            label="关联分支"
            validate-trigger="input"
            required
          >
            <a-input v-model="form.relateBranch" placeholder="请输入关联分支" />
          </a-form-item>
        </a-form>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { createPipeline, queryAllPipelineInfo } from '@/api/pipeline'
import appStore from '@/store'
const { userInfo } = appStore.useMainStore

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: '流水线名称',
    dataIndex: 'pipelineName',
  },
  {
    title: '创建人',
    dataIndex: 'admin',
  },
  {
    title: '关联仓库',
    dataIndex: 'relateRepo',
  },
  {
    title: '关联分支',
    dataIndex: 'relateBranch',
  },
]

const initForm = {
  pipelineName: '',
  admin: userInfo.user_name,
  relateRepo: '',
  relateBranch: '',
}

const form = reactive({ ...initForm })

// 初始化方法
const resetForm = () => {
  Object.assign(form, initForm)
}

const state = reactive({
  dialogVisible: false,
  data: [],
})

onMounted(async () => {
  await queryPipelineInfo()
})

const create = () => {
  state.dialogVisible = true
}

const queryPipelineInfo = async () => {
  try {
    const res = await queryAllPipelineInfo()
    state.data = res.result
    Message.success(res.message)
  } catch (e) {
    console.log(e)
  }
}

const handleOk = async () => {
  try {
    await createPipeline(form)
    Message.success('创建成功')
    await queryPipelineInfo()
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
.pipeline-page {
  overflow-y: hidden;
  height: 100%;

  .pipeline-create {
    margin-bottom: 20px;
  }
}
</style>
