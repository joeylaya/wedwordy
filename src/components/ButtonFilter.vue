<script setup lang="ts">
import { ref } from 'vue';

const isActive = ref(false)
const toggleActive = () => {
  isActive.value = !isActive.value
}
</script>

<template>
<button @click="toggleActive" class="btn h-8 flex gap-2 rounded-full" :class="isActive ? 'pl-1 pr-4 bg-secondary-700' : 'px-4 bg-secondary-500'">
  <div class="icon icon-filter flex-center" :class="isActive ? '' : 'hidden'">
    <i class="fi fi-br-check h-3"></i>
  </div>
  <h6 class="header-6 text-gray-100">Secular</h6>
</button>
</template>
