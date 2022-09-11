<script setup lang="ts">
import { ref, watchEffect } from "vue";
import Navbar from "../components/Navbar.vue";
import CeremonyDetails from "../components/CeremonyDetails.vue";
import EditorWidget from "../components/EditorWidget.vue";
import ScriptWidget from "../components/ScriptWidget.vue";
import { globalStore } from "../stores/globalStore";
import { useRoute } from "vue-router";
import { ceremonyStore } from "../stores/ceremonyStore";
import ScriptWidgetSkeleton from "../components/ScriptWidgetSkeleton.vue";
import EditorWidgetSkeleton from "../components/EditorWidgetSkeleton.vue";
import CeremonyDetailsSkeleton from "../components/CeremonyDetailsSkeleton.vue";
import ScriptTemplateForm from "../components/ScriptTemplateForm.vue";
import ScriptTemplateModal from "../components/ScriptTemplateModal.vue";

const useGlobalStore = globalStore()
const { activeBar } = useGlobalStore

const ceremonyId = useRoute().params
console.log(`Ceremony ID is ${ceremonyId.id}`)
</script>

<template>
<Suspense>
  <div class="flex">
    <Navbar />
    <div
      class="page"
      :class="activeBar === 'navbar' ? 'sm:(ml-46)' : 'sm:(ml-8)'"
    >
      <header class="page-header">
        <h1>Ceremony Dashboard</h1>
      </header>
      <main class="w-full flex flex-col gap-6 sm:(gap-8) xl:(flex-row)">
        <section id="ceremonyDetails" aria-label="ceremony details" class="pr-4 sm:(pr-0)">
          <CeremonyDetails :ceremonyId="ceremonyId.id" />
        </section>
        <section id="widgets" aria-label="script and editor widgets" class="w-full flex flex-col gap-6 sm:(gap-8)">
          <ScriptWidget :ceremonyId="ceremonyId.id" />
          <EditorWidget :ceremonyId="ceremonyId.id" />
        </section>
      </main>
    </div>      
  </div>
  <template #fallback>
    <div class="flex">
      <Navbar />
      <div class="page">
        <header class="page-header">
          <h1>Ceremony Dashboard</h1>
        </header>
        <main class="w-full flex flex-col gap-6 sm:(gap-8) xl:(flex-row)">
          <section id="ceremonyDetails" aria-label="ceremony details" class="pr-4 sm:(pr-0)">
            <CeremonyDetailsSkeleton />
          </section>
          <section id="widgets" aria-label="script and editor widgets" class="w-full flex flex-col gap-6 sm:(gap-8)">
            <ScriptWidgetSkeleton />
            <EditorWidgetSkeleton />
          </section>
        </main>
      </div>      
    </div>
  </template>
</Suspense>
<Teleport to="body">
  <ScriptTemplateModal />
</Teleport>
</template>
