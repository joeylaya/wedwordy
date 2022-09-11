<script setup lang="ts">
const props = defineProps([
  'id',
  'updatedAt',
  'name'
])
</script>

<template>
  <div :id="id" class="card w-64 h-40 p-4 flex-none sm:(h-80 p-6) gradient-300 hover:(gradient-500) active:(gradient-100) text-gray-100 text-left">
    <i class="fi fi-br-menu-dots text-right"></i>
    <div class="h-full flex flex-col gap-2 sm:(gap-6) justify-end">
      <h3 class="header-3">{{ name }}</h3>
      <div class="flex gap-1 sm:(flex-col gap-0)">
        <p class="text-sm">Last Edited</p>
        <p class="text-sm">{{ updatedAt }}</p>
      </div>
    </div>
  </div>
</template>
