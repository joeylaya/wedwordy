<script setup lang="ts">
import ScriptTemplateForm from "./ScriptTemplateForm.vue";
import ScriptTemplatePreview from "./ScriptTemplatePreview.vue";
import { scriptStore, type IScript } from "@/stores/scriptStore";
import { globalStore } from '../stores/globalStore'
import { storeToRefs } from 'pinia';
import { reactive, ref, shallowRef, watchEffect, type Component, type Ref } from "vue";

const useScriptStore = scriptStore()
const useGlobalStore = storeToRefs(globalStore())
const { activeModal } = useGlobalStore

const isActive = ref(false)
const activeComponent = shallowRef(ScriptTemplateForm) as Ref<Component>
const scriptTemplates = ref(Array<IScript>())
const scriptTemplateId = ref(String())

watchEffect(async () => {
  if (activeModal.value == 'scriptTemplateModal') {
    scriptTemplates.value = await useScriptStore.getScriptTemplates()
    isActive.value = true
    console.log(scriptTemplates.value)
  } else {
    isActive.value = false
  }
})

const deactivate = () => {
  activeComponent.value = ScriptTemplateForm
  activeModal.value = null
}
const viewAll = () => {
  activeComponent.value = ScriptTemplateForm
}
const previewTemplate = (id: string) => {
  console.log(id)
  scriptTemplateId.value = id
  activeComponent.value = ScriptTemplatePreview
}
const selectTemplate = (id: string) => {
  useScriptStore.addScript(id)
  deactivate()
}
</script>

<template>
  <div v-if="isActive" class="modal">
    <button class="btn absolute z-60 top-2 left-2" @click="deactivate">
      <div class="icon icon-selector text-gray-300">
        <i class="fi fi-br-x h-5"></i>
      </div>
    </button>
    <component
      :is="activeComponent"
      @deactivate="deactivate"
      @viewAll="viewAll"
      @previewTemplate="previewTemplate"
      @selectTemplate="selectTemplate"
      :scriptTemplates="scriptTemplates"
      :scriptTemplateId="scriptTemplateId"
    />  
  </div>
</template>
