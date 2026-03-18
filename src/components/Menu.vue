<template>
  <ul class="menu shadow w-full h-full">
    <li v-for="item in menuList" :key="item.id" class="p-1 hover:bg-gray-200 cursor-pointer leading-8">
      <router-link :to="item.path" class="block w-full">
        {{ item.name }}
      </router-link>
    </li>
  </ul>
</template>
<script setup>
import { routes as routerConfig } from '../router/index.ts'

const menuList = routerConfig.map((route, index) => ({
  id: index,
  name: route.meta?.title ?? route.name ?? '',
  path: route.path
}))
</script>
<style lang="scss" scoped>

</style>