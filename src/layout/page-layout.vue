<script lang="ts" setup></script>
<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in" appear>
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>
