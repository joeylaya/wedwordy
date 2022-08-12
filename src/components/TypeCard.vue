<script setup lang="ts">
import { ref } from 'vue';

const expanded = ref(false)
const handleCollapse = () => {
  expanded.value = false
}
const handleExpand = () => {
  expanded.value = true
}
</script>

<template>
  <div v-if="!expanded" @click="handleExpand" class="card h-14 p-6 justify-center gradient-300 hover:(gradient-500) md:(h-20)">
    <h4 class="header-4 text-gray-100">Iaculis hac augue</h4>
  </div>
  <div v-if="expanded" @click="handleCollapse" class="card p-6 gap-2 justify-center bg-gray-100">
    <h4 class="header-4 gradient-text text-left">Iaculis hac augue</h4>
    <p class="text-sm text-left">Sit volutpat risus vulputate gravida condimentum commodo. Placerat habitant id penatibus mattis odio consectetur fames. Donec fusce nam a massa id sit. Enim duis rutrum mus urna bibendum. In dolor massa vivamus interdum purus lectus euismod.</p>
  </div>
</template>
