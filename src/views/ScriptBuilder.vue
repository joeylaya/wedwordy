<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import ScriptToolbar from "../components/ScriptToolbar.vue";
import ScriptSidebar from "../components/ScriptSidebar.vue";
import ScriptDisplayCard from "../components/ScriptDisplayCard.vue";
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
  <div class="w-screen p-4 flex flex-col gap-2 sm:(p-16 gap-6)" :class="isNavbarExpanded ? 'sm:(ml-46)' : 'sm:(ml-8)'">
    <header class="page-header">Script Builder</header>
    <main class="w-full flex flex-col gap-4">
      <ScriptToolbar />
      <div class="flex">
        <ScriptDisplayCard />
        <ScriptSidebar />
      </div>
    </main>
  </div>
</div>
</Suspense>
</template>
