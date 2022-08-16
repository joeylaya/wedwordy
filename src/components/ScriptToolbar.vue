<script setup lang="ts">
import { ref } from 'vue';
import { store } from '@/stores/store';
const useStore = store()
const isExpanded = ref(false)
const toggleExpansion = () => {
  isExpanded.value = !isExpanded.value
}
const handleSave = () => {

}
const handleAddElement = () => {
  useStore.isScriptSidebarActive = true
}
const handleReorder = () => {

}
const handleExpandAll = () => {

}
const handleCollapseAll = () => {

}
</script>

<template>
<button @click="toggleExpansion" class="btn fixed top-0 right-0 p-4 sm:(hidden)" :class="isExpanded ? 'hidden' : ''">
  <div class="icon text-gray-400">
    <i class="fi fi-br-pencil h-4 text-lg"></i>
  </div>          
</button>
<div class="flex flex-col gap-4 sm:(flex-row)" :class="isExpanded ? '<sm:(bg-gray-100 p-4 h-full shadow fixed top-0 right-0 z-20)' : '<sm:(hidden)'">
  <div class="flex justify-between sm:(hidden)">
    <h4 class="header-4">Toolbar</h4>
    <button @click="toggleExpansion" class="btn">
      <div class="icon text-gray-400 text-sm">
        <i class="fi fi-br-angle-right h-4"></i>
      </div>
    </button>
  </div>
  <div class="flex flex-col gap-2 sm:(flex-row)">
    <button @click="handleSave" class="btn btn-1">
      <div class="icon icon-btn">
        <i class="fi fi-br-check h-4"></i>
      </div>
      <h5>Save</h5>
    </button>
    <button @click="handleAddElement" class="btn btn-1 sm:(hidden)">
      <div class="icon icon-btn">
        <i class="fi fi-br-plus h-4"></i>
      </div>
      <h5>Add Element</h5>
    </button>
    <button @click="handleReorder" class="btn btn-1">
      <div class="icon icon-btn">
        <i class="fi fi-br-apps-sort h-4"></i>
      </div>
      <h5>Reorder</h5>
    </button>
    <button @click="handleExpandAll" class="btn btn-1">
      <div class="icon icon-btn">
        <i class="fi fi-br-angle-down h-4"></i>
      </div>
      <h5>Expand All</h5>
    </button>
    <button @click="handleCollapseAll" class="btn btn-1">
      <div class="icon icon-btn">
        <i class="fi fi-br-angle-up h-4"></i>
      </div>
      <h5>Collapse All</h5>
    </button>
  </div>
</div>
</template>
