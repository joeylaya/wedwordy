<script setup lang="ts">
import { globalStore } from "../stores/globalStore";
import { ref, watchEffect } from "vue";
import ButtonChoice from "./ButtonChoice.vue";
const useGlobalStore = globalStore()

const isActive = ref(false)
watchEffect(() => {
  if (useGlobalStore.activeBar === 'scriptSidebar') {
    isActive.value = true
  } else {
    isActive.value = false
  }
})
</script>

<template>
  <div class="p-6 rounded-r-3xl bg-gray-100 sm:(min-w-64)" :class="isActive ? '<sm:(bg-gray-100 p-4 h-full flex flex-col gap-8 flex-center fixed top-0 right-0 z-20)' : '<sm:(hidden)'">
    <div class="text-center sm:(hidden)">
      <h1 class="header-1">Select an element type</h1>
    </div>
    <div class="flex flex-wrap gap-4 justify-center content-center sm:(content-start)">
      <ButtonChoice />
      <ButtonChoice />
      <ButtonChoice />
      <ButtonChoice />
      <ButtonChoice />
      <ButtonChoice />
    </div>
  </div>
</template>
