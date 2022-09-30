<script lang="ts" setup>
import Menu from '@/components/menu/index.vue'

import PageLayout from './page-layout.vue'
</script>

<template>
  <div class="layout-demo">
    <a-layout>
      <a-layout-header>
        Header
        <slot name="header"></slot>
      </a-layout-header>
      <a-layout>
        <a-layout-sider collapsible breakpoint="xl">
          <Menu />
        </a-layout-sider>
        <a-layout-content>
          <page-layout />
        </a-layout-content>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<style lang="scss" scoped>
// 这里是编译器的css样式与stylelint的检查冲突了 但是不影响使用
.layout-demo :deep(.arco-layout) {
  width: 100vw;
  height: 100vh;
  background-color: #f5f6f7;
}

.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer) {
  display: flex;
  justify-content: center;
  font-size: 16px;
  text-align: center;
  //color: var(--color-white);
  flex-direction: column;
  font-stretch: condensed;
}

.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer) {
  height: 64px;
  background-color: cyan;
}

.layout-demo :deep(.arco-layout-sider) {
  height: calc(100vh - 128px);
  //background-color: aliceblue;
}

.layout-demo :deep(.arco-layout-content) {
  padding: 20px 20px 0;
  margin: 10px 15px;
  background-color: white;
}
</style>
