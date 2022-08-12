<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import CeremonyDetails from "../components/CeremonyDetails.vue";
import ScriptCard from "../components/ScriptCard.vue";
import EditorCard from "../components/EditorCard.vue";
</script>

<template>
<Suspense>
<div class="flex">
  <Navbar />
  <div class="w-screen mb-18 pl-4 py-4 flex flex-col gap-2 sm:(ml-24 p-16 gap-6)">
    <header class="page-header">Ceremony Dashboard</header>
    <main class="w-full flex flex-col gap-6 sm:(gap-8) xl:(flex-row)">
      <section id="ceremonyDetails" class="pr-4 sm:(pr-0)">
        <CeremonyDetails />        
      </section>
      <div class="w-full flex flex-col gap-6 sm:(gap-8)">
        <section id="scripts" class="w-full overflow-x-scroll flex gap-4 sm:(pl-8 py-8 gap-8 rounded-3xl shadow bg-gray-100)">
          <header class="absolute header-2 text-gray-800">Scripts</header>
          <div class="pt-10 flex gap-4 sm:(flex-wrap pt-16 gap-6)">
            <ScriptCard />
            <ScriptCard />
            <ScriptCard />
          </div>
        </section>
        <section id="editors" class="w-full overflow-x-scroll flex gap-4 sm:(pl-8 py-8 gap-8 rounded-3xl shadow bg-gray-100)">
          <header class="absolute header-2 text-gray-800">Editors</header>
          <div class="pt-10 flex gap-4 sm:(flex-wrap pt-16 gap-6)">
            <EditorCard />
            <EditorCard />
          </div>
        </section>        
      </div>
    </main>
  </div>      
</div>
</Suspense>
</template>
