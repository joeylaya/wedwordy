<script setup lang="ts">
import { scriptStore } from '../stores/scriptStore';
import ScriptCard from './ScriptCard.vue';
import ScriptAdd from './ScriptAdd.vue';
import { globalStore } from '../stores/globalStore'
import { storeToRefs } from 'pinia';
const useGlobalStore = storeToRefs(globalStore())
const { activeModal } = useGlobalStore

const props = defineProps([ 'ceremonyId' ])
const useScriptStore = scriptStore()
const scriptCards = await useScriptStore.getScriptCards(props.ceremonyId)

const addCount = 3 - scriptCards.length
const activateScriptTemplateModal = () => {
  activeModal.value = 'scriptTemplateModal'
}
</script>

<template>
  <section id="scriptWidget" aria-label="script widget" class="widget">
    <header class="absolute header-2 text-gray-800">
      <h2>Scripts</h2>
    </header>
    <div class="widget-body">
      <div v-for="card in scriptCards" :key="card.id">
        <ScriptCard :="card" />
      </div>
      <div v-for="add in addCount" :key="add">
        <ScriptAdd @click="activateScriptTemplateModal" />
      </div>
    </div>
  </section>
</template>
