<script setup lang="ts">
import EditorCardSkeleton from './EditorCardSkeleton.vue';
</script>

<template>
  <section id="editorWidgetSkeleton" aria-label="editor widget skeleton" class="widget">
    <header class="absolute header-2 text-gray-800">
      <h2>Editors</h2>
    </header>
    <div class="widget-body">
      <EditorCardSkeleton />
      <EditorCardSkeleton />
      <EditorCardSkeleton />
    </div>
  </section>
</template>
