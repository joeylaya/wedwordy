<script setup lang="ts">
import CeremonyCard from "../components/CeremonyCard.vue"
</script>

<template>
<Suspense>
  <div class="p-4 flex flex-col gap-2 md:(p-16 gap-6)">
    <header class="page-header justify-center">
      <h1>My Ceremonies</h1>
    </header>
    <main class="flex flex-col gap-4 place-items-center md:(gap-6)">
      <CeremonyCard />
      <CeremonyCard />
    </main>
  </div>  
</Suspense>
</template>
