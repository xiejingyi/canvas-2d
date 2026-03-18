<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
</script>

<template>
  <div class="flex flex-row">
    <div class="w-60 shrink-0 flex flex-col">
      <Menu/>
    </div>
    <div class="w-full pl-2">
      <router-view/>
    </div>
  </div>
</template>
