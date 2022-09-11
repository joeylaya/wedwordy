<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { watchEffect } from 'vue';
import { RouterView } from 'vue-router'
import { globalStore } from './stores/globalStore';

const useGlobalStore = storeToRefs(globalStore()) 
const { activeBar, activeModal } = useGlobalStore
watchEffect(() => {
  console.log(activeBar, activeModal)
})

const deactivate = () => {
  activeModal.value = null
}
</script>

<template>
<div class="font-body text-gray-800">
  <div v-show="activeModal !== null" class="w-full h-full bg-gray-800/20 fixed z-40" @click="deactivate"></div>
  <RouterView />    
</div>
</template>
