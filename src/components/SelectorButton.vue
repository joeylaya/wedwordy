<script setup lang="ts">
defineProps([dataPoint, value])
</script>

<template>
  <button @click="handleSelect(value)" class="btn" :class="dataPoint === value ? 'btn-selector-selected' : 'btn-selector'">
    <div class="icon icon-selector" :class="dataPoint === value ? '' : 'hidden'">
      <i class="fi fi-br-check gradient-text h-4"></i>
    </div>
    <h5 :class="dataPoint === value ? 'gradient-text' : ''">
      <slot></slot>
    </h5>
  </button>
</template>
