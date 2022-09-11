<script setup lang="ts">
import { ceremonyStore } from '../stores/ceremonyStore';

const props = defineProps([
  'ceremonyId'
])
const useCeremonyStore = ceremonyStore()
const ceremony = await useCeremonyStore.getCeremony(props.ceremonyId)
</script>

<template>
<div class="card w-full bg-gray-100 xl:(min-w-80)">
  <img src="../assets/images/test.jpg" class="h-48 rounded-t-2xl object-cover sm:(h-78 rounded-t-3xl)" />
  <div class="p-6 flex flex-col gap-4 justify-center sm:(p-8 gap-8)">
    <h1 class="text-center header-1 gradient-text sm:(text-left)">{{ ceremony.name }}</h1>
    <div class="flex justify-between sm:(gap-4 flex-col)">
      <div class="w-1/2 flex flex-col place-items-center sm:(w-full flex-row gap-4)">
        <div class="icon text-gray-400 text-xl">
          <i class=" fi fi-br-calendar-lines"></i>
        </div>
        <h3 class="header-4 text-gray-800">{{ ceremony.date }}</h3>
      </div>
      <div class="w-1/2 flex flex-col place-items-center sm:(w-full flex-row gap-4)">
        <div class="icon text-gray-400 text-xl">
          <i class=" fi fi-br-marker"></i>
        </div>
        <div class="flex flex-col place-items-center sm:(place-items-start)">
          <h3 class="header-4 text-gray-800">{{ ceremony.venue }}</h3>
          <h4 class="header-5">{{ ceremony.city }}, {{ ceremony.state }}</h4>              
        </div>
      </div>            
    </div>
  </div>
</div>
</template>
