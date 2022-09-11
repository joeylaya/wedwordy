<!-- <script setup lang="ts">
import { store } from '../stores/globalStore';
import { storeToRefs } from 'pinia'
import { ref, toRef, toRefs } from 'vue';

const props = defineProps([ 'id', 'ariaLabel', 'icon', 'label', 'dataRef'])
const useStore = storeToRefs(store())
const dataPoint = toRefs(useStore.formData.value[...props.dataRef])

defineEmits([ 'clicked' ])
</script>

<template>
  <button
    :id         = "id"
    :aria-label = "ariaLabel"
    @click      = "$emit('clicked')"
    class       = "btn"
    :class      = "dataPoint === id ? 'btn-selector-selected' : 'btn-selector'"
  >
    <div
      class   = "icon icon-selector"
      :class  = "dataPoint === id ? '' : 'hidden'"
    >
      <i
        class   = "fi h-4"
        :class  = "icon"
      >
      </i>
    </div>
    <h5>{{ label }}</h5>
  </button>
</template> -->
