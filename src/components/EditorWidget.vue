<script setup lang="ts">
import { userStore } from '../stores/userStore';
import EditorCard from './EditorCard.vue';

const props = defineProps([ 'ceremonyId'])
const useUserStore = userStore()
const userCards = await useUserStore.getUserCards(props.ceremonyId)
</script>

<template>
  <section id="editorWidget" aria-label="editor widget" class="widget">
    <header class="absolute header-2 text-gray-800">
      <h2>Editors</h2>
    </header>
    <div class="widget-body">
      <div v-for="card in userCards" :key="card.id">
        <EditorCard :="card" />
      </div>
    </div>
  </section>
</template>
