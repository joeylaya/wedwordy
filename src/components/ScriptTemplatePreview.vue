<script setup lang="ts">
import type { IScript } from "@/stores/scriptStore";
import { ref, watchEffect } from "vue";
import ElementEditor from "./ElementEditor.vue";

const props = defineProps<{
  scriptTemplates: Array<IScript>,
  scriptTemplateId: String
}>()

const scriptTemplateCount = props.scriptTemplates?.length
const currentIndex = ref(Number())
currentIndex.value = props.scriptTemplates?.findIndex(
  (scriptTemplate) => {
    return scriptTemplate.id == props.scriptTemplateId
  }
) as number

const previous = () => {
  if (currentIndex.value == 0) {
    currentIndex.value = scriptTemplateCount - 1
  } else {
    currentIndex.value--
  }
}
const next = () => {
  if (currentIndex.value == scriptTemplateCount - 1) {
    currentIndex.value = 0
  } else {
    currentIndex.value++
  }
}

const currentScriptTemplate = ref(Object() as IScript)
watchEffect(() => {
  currentScriptTemplate.value = props.scriptTemplates[currentIndex.value]
})
</script>

<template>
  <div class="w-full h-full p-4 flex flex-col gap-6 rounded-none z-10 overflow-y-scroll sm:(w-204 min-w-204 h-screen max-h-full p-12 bg-gray-100 shadow)">
    <div class="flex justify-between">
      <header class="page-header">Script Preview</header>
      <div class="mt-8 flex flex-center gap-2 sm:(mt-0)">
        <button class="btn" @click="previous">
          <div class="icon text-gray-500">
            <i class="fi fi-br-angle-left h-5"></i>
          </div>
        </button>
        <p class="text-gray-500">{{ currentIndex + 1 }} of {{ scriptTemplateCount }}</p>
        <button class="btn" @click="next">
          <div class="icon text-gray-500">
            <i class="fi fi-br-angle-right h-5"></i>
          </div>
        </button>
      </div>
    </div>
    <div class="flex gap-2">
      <button class="btn btn-1" @click="$emit('viewAll')">
        <div class="icon icon-btn">
          <i class="fi fi-br-angle-left h-4"></i>
        </div>
        <h5>Back to all</h5>
      </button>
      <button class="btn btn-1" @click="$emit('selectTemplate', 1)">
        <div class="icon icon-btn">
          <i class="fi fi-br-check h-4"></i>
        </div>
        <h5>Select Template</h5>
      </button>
    </div>
    <section class="flex flex-col gap-4">
      <header>
        <h4 class="header-4">{{ currentScriptTemplate.name }}</h4>
      </header>
      <div v-for="element in currentScriptTemplate.elements" :key="element.id">
        <ElementEditor :="element" /> 
      </div>
    </section>
  </div>
</template>
