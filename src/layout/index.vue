<template>
  <div class="layout-demo">
    <a-layout>
      <a-layout-header>
        Header
        <slot name="header"></slot>
      </a-layout-header>
      <a-layout>
        <a-layout-sider :resize-directions="['right']"> Sider </a-layout-sider>
        <a-layout-content>Content</a-layout-content>
      </a-layout>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<style lang="scss" scoped>
// 这里是编译器的css样式与stylelint的检查冲突了 但是不影响使用
.layout-demo :deep(.arco-layout) {
  height: 100vh;
}

.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-sider-children),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  justify-content: center;
  font-size: 16px;
  text-align: center;
  color: var(--color-white);
  flex-direction: column;
  font-stretch: condensed;
}

.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer) {
  height: 64px;
  background-color: var(--color-primary-light-4);
}

.layout-demo :deep(.arco-layout-sider) {
  width: 206px;
  min-width: 150px;
  max-width: 500px;
  height: calc(100vh - 128px);
  background-color: var(--color-primary-light-3);
}

.layout-demo :deep(.arco-layout-content) {
  background-color: rgb(var(--arcoblue-6));
}
</style>
