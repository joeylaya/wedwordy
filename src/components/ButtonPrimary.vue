<script setup lang="ts">
defineProps([ 'id', 'ariaLabel', 'icon', 'label'])
defineEmits([ 'clicked' ])
</script>

<template>
  <button
    :id="id"
    :aria-label="ariaLabel"
    @click="$emit('clicked')"
    class="btn btn-1"
  >
    <div class="icon icon-btn">
      <i
        class="fi h-4"
        :class="icon"
      >
      </i>
    </div>
    <h5>{{ label }}</h5>
  </button>
</template>
