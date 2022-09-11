<script setup lang="ts">
import { ref } from 'vue';
import { globalStore } from '../stores/globalStore';
import ButtonPrimary from './ButtonPrimary.vue';

const handleSave = () => {

}
const handleAddElement = () => {
  
}
const handleReorder = () => {

}
const handleExpandAll = () => {

}
const handleCollapseAll = () => {

}
const buttonPrimaryProps = [
  {
    id: "save",
    ariaLabel: "save script",
    icon: "fi-br-check",
    label: "Save",
    clickEvent: handleSave
  },
  {
    id: "addElement",
    ariaLabel: "add element to script",
    icon: "fi-br-plus",
    label: "Add Element",
    clickEvent: handleAddElement
  },
  {
    id: "reorder",
    ariaLabel: "reorder script elements",
    icon: "fi-br-apps-sort",
    label: "Reorder",
    clickEvent: handleReorder
  },
  {
    id: "expandAll",
    ariaLabel: "expand all script elements",
    icon: "fi-br-angle-down",
    label: "Expand All",
    clickEvent: handleExpandAll
  },
  {
    id: "collapseAll",
    ariaLabel: "collapse all script elements",
    icon: "fi-br-angle-up",
    label: "Collapse All",
    clickEvent: handleCollapseAll
  }
]
defineEmits([ 'deactivate' ])
</script>

<template>
  <section
    id="scriptToolbar"
    aria-label="script toolbar"
    class="h-full p-4 flex flex-col gap-4 shadow bg-gray-100 fixed top-0 right-0 sm:(h-auto p-0 flex-row shadow-none bg-transparent relative)"
  >
    <header class="flex justify-between sm:(hidden)">
      <h4 class="header-4">Toolbar</h4>
      <button
        id="deactivateScriptToolbar"
        aria-label="deactivate script toolbar"
        @click="$emit('deactivate')"
        class="btn"
      >
        <div class="icon text-gray-400 text-sm">
          <i class="fi fi-br-angle-right h-4"></i>
        </div>
      </button>
    </header>
    <div class="flex flex-col gap-2 sm:(flex-row)">
      <div v-for="props in buttonPrimaryProps">
        <ButtonPrimary
          :id="props.id"
          :ariaLabel="props.ariaLabel"
          :icon="props.icon"
          :label="props.label"
          @clicked="props.clickEvent"
        />
      </div>
    </div>
  </section>
</template>
