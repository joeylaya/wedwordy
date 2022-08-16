<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import CeremonyDisplayCard from "../components/CeremonyDisplayCard.vue";
import ScriptPreviewCard from "../components/ScriptPreviewCard.vue";
import EditorPreviewCard from "../components/EditorPreviewCard.vue";
import { ref, watchEffect } from "vue";
import { store } from "@/stores/store";
const useStore = store()

const isNavbarExpanded = ref(useStore.isNavbarExpanded)
watchEffect(() => {
  isNavbarExpanded.value = useStore.isNavbarExpanded
})
</script>

<template>
<Suspense>
<div class="flex">
  <Navbar />
  <div class="w-screen mb-18 pl-4 py-4 flex flex-col gap-2 sm:(ml-24 p-16 gap-6)" :class="isNavbarExpanded ? 'sm:(ml-46)' : 'sm:(ml-8)'">
    <header class="page-header">Ceremony Dashboard</header>
    <main class="w-full flex flex-col gap-6 sm:(gap-8) xl:(flex-row)">
      <section id="ceremonyDetails" class="pr-4 sm:(pr-0)">
        <CeremonyDisplayCard />        
      </section>
      <div class="w-full flex flex-col gap-6 sm:(gap-8)">
        <section id="scripts" class="w-full overflow-x-scroll flex gap-4 sm:(pl-8 py-8 gap-8 rounded-3xl shadow bg-gray-100)">
          <header class="absolute header-2 text-gray-800">Scripts</header>
          <div class="pt-10 flex gap-4 sm:(flex-wrap pt-16 gap-6)">
            <ScriptPreviewCard />
            <ScriptPreviewCard />
            <ScriptPreviewCard />
          </div>
        </section>
        <section id="editors" class="w-full overflow-x-scroll flex gap-4 sm:(pl-8 py-8 gap-8 rounded-3xl shadow bg-gray-100)">
          <header class="absolute header-2 text-gray-800">Editors</header>
          <div class="pt-10 flex gap-4 sm:(flex-wrap pt-16 gap-6)">
            <EditorPreviewCard />
            <EditorPreviewCard />
          </div>
        </section>        
      </div>
    </main>
  </div>      
</div>
</Suspense>
</template>
