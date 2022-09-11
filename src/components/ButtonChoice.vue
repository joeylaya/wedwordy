<script setup lang="ts">
import { ref } from 'vue';

const isExpanded = ref(false)
const toggleExpansion = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
<button
  @click="toggleExpansion"
  class="card p-6 justify-center"
  :class="isExpanded ? 'gap-2 bg-gray-100' : 'h-14 gradient-300 hover:(gradient-500) sm:(h-20)'"
>
  <h4
    class="header-4"
    :class="isExpanded ? 'gradient-text text-left' : 'text-gray-100 text-center'"
  >
    Iaculis hac augue
  </h4>
  <p
    class="text-sm text-left"
    :class="isExpanded ? 'block' : 'hidden'"
  >
    Sit volutpat risus vulputate gravida condimentum commodo. Placerat habitant id penatibus mattis odio consectetur fames. Donec fusce nam a massa id sit. Enim duis rutrum mus urna bibendum. In dolor massa vivamus interdum purus lectus euismod.
  </p>
</button>
</template>
