<script setup lang="ts">
</script>

<template>
<div class="card w-full bg-gray-100 xl:(min-w-80)">
  <div class="h-48 rounded-t-2xl bg-gray-400 sm:(h-78 rounded-t-3xl)"></div>
  <div class="p-6 flex flex-col gap-4 justify-center sm:(p-8 gap-8)">
    <div class="flex flex-wrap gap-x-3 justify-center sm:(justify-start)">
      <div class="h1-skeleton w-28 sm:w-42"></div>
      <div class="h1-skeleton w-6 sm:w-8"></div>
      <div class="h1-skeleton w-42 sm:w-58"></div>
    </div>
    <div class="flex justify-between sm:(gap-4 flex-col)">
      <div class="w-1/2 flex flex-col gap-2 place-items-center sm:(w-full flex-row gap-4)">
        <div class="icon w-9 h-9 bg-gray-300"></div>
        <div class="h4-skeleton w-36 sm:w-42"></div>
      </div>
      <div class="w-1/2 flex flex-col gap-2 place-items-center sm:(w-full flex-row gap-4)">
        <div class="icon w-9 h-9 bg-gray-300"></div>
        <div class="flex flex-col place-items-center sm:(place-items-start)">
          <div class="h4-skeleton w-24 sm:w-28"></div>
          <div class="h5-skeleton w-32 sm:w-38"></div>            
        </div>
      </div>            
    </div>
  </div>
</div>
</template>
