<script setup lang="ts">
import ButtonChoice from "./ButtonChoice.vue";

const props = defineProps([ "scriptTemplates" ])
</script>

<template>
<div class="flex flex-col flex-center gap-4 w-full h-full sm:(w-204 h-auto p-8 gap-8)">
  <div class="flex flex-col flex-center gap-2 pointer-events-none">
    <h1 class="header-1">Select a Template Script</h1>
    <p class="text-sm sm:(text-md)">Click a template script name below to preview.</p>
  </div>
  <div class="flex flex-wrap gap-2 flex-center sm:(gap-4)">
    <div
      v-for="scriptTemplate in scriptTemplates"
      :key="scriptTemplate.id"
    >
      <ButtonChoice :="scriptTemplate" @click="$emit('previewTemplate', scriptTemplate.id)" />
    </div>
  </div>
</div>
</template>
