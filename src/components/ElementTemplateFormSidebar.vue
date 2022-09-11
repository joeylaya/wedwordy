<script setup lang="ts">
import { ref } from 'vue';
import FilterCard from './FilterCard.vue';

const isExpanded = ref(false)
const toggleExpansion = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
<button @click="toggleExpansion" class="btn fixed top-0 right-0 p-4" :class="isExpanded ? 'hidden' : ''">
  <div class="icon text-gray-400">
    <i class="fi fi-br-filter h-4 text-lg"></i>
  </div>
</button>
<div class="w-1/3 h-full p-4 flex flex-col gap-4 bg-gray-100 shadow sm:(w-54 h-auto rounded-r-3xl)" :class="isExpanded ? '<sm:(fixed top-0 right-0)' : 'hidden'">
  <div class="flex justify-between">
    <h4 class="header-4">Filters</h4>
    <button @click="toggleExpansion" class="btn">
      <div class="icon text-gray-400 text-sm">
        <i class="fi fi-br-angle-right h-4"></i>
      </div>
    </button>
  </div>
  <div class="flex flex-col gap-2 sm:(flex-row)">
    <div class="flex flex-col gap-1">
      <h5 class="header-5">Culture</h5>
      <div>
        <FilterCard />
      </div>
    </div>
  </div>
</div>
</template>
