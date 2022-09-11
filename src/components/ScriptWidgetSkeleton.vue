<script setup lang="ts">
import ScriptCardSkeleton from './ScriptCardSkeleton.vue';
</script>

<template>
  <section id="scriptWidgetSkeleton" aria-label="script widget skeleton" class="widget">
    <header class="absolute header-2 text-gray-800">
      <h2>Scripts</h2>
    </header>
    <div class="widget-body">
      <ScriptCardSkeleton />
      <ScriptCardSkeleton />
      <ScriptCardSkeleton />
    </div>
  </section>
</template>
