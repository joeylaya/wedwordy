<script setup lang="ts">
import ButtonChoice from "./ButtonChoice.vue";
import ElementTemplateFormSidebar from "./ElementTemplateFormSidebar.vue";
import { scriptStore } from "@/stores/scriptStore";
import { globalStore } from '../stores/globalStore'
import { storeToRefs } from 'pinia';
import { ref, watchEffect } from "vue";

const useScriptStore = scriptStore()
const useGlobalStore = storeToRefs(globalStore())
const { activeModal } = useGlobalStore

const isActive = ref(false)
const elementTemplateNames = ref(Array<String>)
  
watchEffect(() => {
  if (activeModal.value == 'scriptTemplateForm') {
    // query script templates
    isActive.value = true
  } else {
    isActive.value = false
  }
})
const deactivate = () => {
  activeModal.value = null
}
</script>

<template>
<div class="flex flex-row modal w-full h-full sm:(w-204 h-auto) <sm:(rounded-none)">
  <div class="flex flex-col flex-center gap-4 sm:(p-8 gap-8)">
    <div class="flex flex-col flex-center gap-2">
      <h1 class="header-1">Select a Template Element</h1>
      <p class="text-sm sm:(text-md)">Click a template element name below to preview.</p>
    </div>
    <div class="flex flex-wrap gap-2 flex-center sm:(gap-4)">
      <ButtonChoice />
      <ButtonChoice />
      <ButtonChoice />
    </div>
  </div>
  <ElementTemplateFormSidebar />  
</div>
</template>
