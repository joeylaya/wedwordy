<script setup lang="ts">
import { store } from "@/stores/store";
import { ref, watchEffect } from "vue";
import ChoiceCard from "./ChoiceCard.vue";
const useStore = store()

const isActive = ref(false)
watchEffect(() => {
  isActive.value = useStore.isScriptSidebarActive
})
</script>

<template>
  <div class="p-6 rounded-r-3xl bg-gray-100 sm:(min-w-64)" :class="isActive ? '<sm:(bg-gray-100 p-4 h-full flex flex-col gap-8 flex-center fixed top-0 right-0 z-20)' : '<sm:(hidden)'">
    <div class="text-center sm:(hidden)">
      <h1 class="header-1">Select an element type</h1>
    </div>
    <div class="flex flex-wrap gap-4 justify-center content-center sm:(content-start)">
      <ChoiceCard />
      <ChoiceCard />
      <ChoiceCard />
      <ChoiceCard />
      <ChoiceCard />
      <ChoiceCard />
    </div>
  </div>
</template>
