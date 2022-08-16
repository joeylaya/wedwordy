<script setup lang="ts">
import ChoiceCard from "./ChoiceCard.vue";
import FiltersSidebar from "./FiltersSidebar.vue";
</script>

<template>
<div class="flex flex-row modal w-full h-full sm:(w-204 h-auto) <sm:(rounded-none)">
  <div class="flex flex-col flex-center gap-4 sm:(p-8 gap-8)">
    <div class="flex flex-col flex-center gap-2">
      <h1 class="header-1">Select a Template Element</h1>
      <p class="text-sm sm:(text-md)">Click a template element name below to preivew.</p>
    </div>
    <div class="flex flex-wrap gap-2 flex-center sm:(gap-4)">
      <ChoiceCard />
      <ChoiceCard />
      <ChoiceCard />
    </div>
  </div>
  <FiltersSidebar />  
</div>
</template>
