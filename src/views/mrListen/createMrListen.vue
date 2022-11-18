<template>
  <div class="step-create">
    <a-button class="back-btn" type="primary" @click="goBack"> 返回 </a-button>
    <a-divider />
    <a-steps :current="curStep + 1" label-placement="vertical" line-less>
      <a-step v-for="step in STEPS" :key="step.id" :description="step.des">{{ step.topic }}</a-step>
    </a-steps>
    <div class="step-create-main">
      <div
        v-for="step in STEPS"
        class="step-wrapper"
        :class="{ 'active-step': step.id === curStep }"
        :key="step.id"
      >
        <div class="step-detail">
          <div v-if="curStep === 0" class="step-detail-context">
            <div class="context-attr">
              <span class="attr-label required">MrListen Name</span>
              <a-input
                v-model="form.name"
                placeholder="Please input MrListen name"
                size="large"
                :max-length="128"
                allow-clear
              />
            </div>
            <div class="context-attr">
              <span class="attr-label required">MrListen Owner</span>
              <a-input
                v-model="form.owner"
                placeholder="Please input MrListen name"
                size="large"
                disabled
              />
            </div>
            <div class="context-attr">
              <span class="attr-label required">MrListen Repo</span>
              <a-select v-model="form.repository" placeholder="Please select your repository">
                <a-option v-for="repo in repos" :key="repo.id" :value="repo.name">
                  {{ repo.name }}
                </a-option>
              </a-select>
              <!--              <span class="tooltip-gray">no repo? click here to create</span>-->
            </div>
          </div>
          <div v-if="curStep === 1" class="step-detail-context">
            <div class="context-attr">
              <span class="attr-label required">MrListen Project ID</span>
              <a-select v-model="form.projectId" placeholder="Please select your project id">
                <a-option
                  v-for="project in projects"
                  :key="project.id"
                  :value="project.id.toString()"
                >
                  {{ project.name }}
                </a-option>
              </a-select>
            </div>
            <div class="context-attr">
              <span class="attr-label">MrListen Project Branch</span>
              <a-select v-model="form.branch" placeholder="Please select your project branch">
              </a-select>
            </div>
            <div class="context-attr">
              <span class="attr-label">MrListen Notice Type</span>
              <a-select v-model="form.noticeType" placeholder="Please select your notice type">
                <a-option value="lanxin">蓝信</a-option>
                <a-option value="email">邮件</a-option>
              </a-select>
            </div>
            <div class="context-attr">
              <span class="attr-label">MrListen Notice address</span>
              <a-input
                v-model="form.noticeAddress"
                placeholder="Please input notice address"
                size="large"
              />
            </div>
          </div>
          <div v-if="curStep === 2" class="step-detail-context">
            <div class="context-attr" v-for="item in Object.keys(form)" :key="item">
              <span class="attr-label" :class="{ required: requiredParams.includes(item) }">
                {{ item }}
              </span>
              <a-input v-model="form[item]" size="large" disabled />
            </div>
          </div>
          <div class="step-detail-operation">
            <a-button @click="handleStep(step.id, false)" :disabled="step.id === 0">
              Previous
            </a-button>
            <a-button @click="handleStep(step.id)">
              {{ step.id !== STEPS.length - 1 ? 'Next' : 'Create' }}
            </a-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import appStore from '@/store'

const { userInfo } = appStore.useMainStore
import { createMrListen } from '@/api/mrListen'
import { queryAllProject, queryAllRepository } from '@/api/repository'
import { NewMrListenStep } from '@/types/mrListen'
import { BaseProjectInfo, RepositoryList } from '@/types/repository'
import { OriginResponse } from '@/types/response'

const STEPS: NewMrListenStep[] = [
  {
    id: 0,
    topic: 'BASE INFO & REPO',
    des: 'config your base info and repo',
  },
  {
    id: 1,
    topic: 'PROJECT & NOTICE',
    des: 'config your project and notice type',
  },
  {
    id: 2,
    topic: 'CHECK LIST',
    des: 'checklist of your config',
  },
]
const curStep = ref<number>(0)
const repos = ref<Array<RepositoryList>>([])
const projects = ref<Array<BaseProjectInfo>>([])
const state = reactive({ repos, projects })

const form = reactive({
  name: '',
  owner: userInfo.name,
  repository: '',
  projectId: null,
  branch: '',
  noticeType: '',
  noticeAddress: '',
})

const requiredParams = ['name', 'owner', 'repository', 'projectId']

onMounted(async () => {
  curStep.value = 0
  await queryAllRepositories()
})

const router = useRouter()

const goBack = () => router.go(-1)

const handleStep = (stepKey: number, isNext = true) => {
  if (stepKey === STEPS.length - 1 && isNext) {
    const { name, owner, repository, projectId } = form
    if (!name || !owner || !repository || !projectId) {
      Message.error('请检查必填项')
      return
    }
    createMrListen(form)
      .then((res: OriginResponse) => {
        Message.success(res.message)
        curStep.value = 0
        goBack()
      })
      .catch(() => {
        curStep.value = 0
        return
      })
  }
  if (stepKey <= STEPS.length - 1) {
    curStep.value = curStep.value + (isNext ? 1 : -1)
  }
}

const queryAllProjects = async (name: string) => {
  await queryAllProject({ name }).then((res: OriginResponse) => {
    state.projects = res.result
  })
}

const queryAllRepositories = async () => {
  await queryAllRepository().then((res: OriginResponse) => {
    state.repos = res.result
  })
}

watch(
  () => form.repository,
  () => queryAllProjects(form.repository)
)
</script>

<style lang="scss" scoped>
.step-create {
  .step-create-main {
    display: flex;
    margin-top: 30px;

    .step-wrapper {
      display: inline-block;
      flex: 0.5;
      padding: 20px 0;
      margin: 0 10px;
      height: 55vh;
      background-size: cover;
      background-color: gainsboro;
      border-radius: 20px;
      transition: flex 2s;

      .step-detail {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        width: 90%;
        height: 100%;
        opacity: 0;
        transition: opacity 750ms linear;

        .step-detail-context {
          width: 100%;

          .context-attr {
            margin-bottom: 10px;

            .attr-label {
              display: inline-block;
              margin: 5px 0;
            }
          }
        }

        .step-detail-operation {
          .arco-btn {
            margin: 0 10px;
          }
        }
      }

      &:hover {
        cursor: pointer;
      }
    }

    .active-step {
      flex: 5;
      transition: flex 2s;
      background-image: none;

      .step-detail {
        opacity: 1;
        transition: opacity 750ms linear;
      }
    }
  }
}

.tooltip-gray {
  display: inline-block;
  margin: 5px 0;
  color: #f5f6f7;

  &:hover {
    color: #0046ff;
  }
}
</style>
