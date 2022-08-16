<script setup lang="ts">
import CeremonyPreviewCard from "../components/CeremonyPreviewCard.vue"
</script>

<template>
<Suspense>
<div class="p-4 flex flex-col gap-2 md:(p-16 gap-6)">
  <header class="page-header justify-center">My Ceremonies</header>
  <main class="flex flex-col gap-4 place-items-center md:(gap-6)">
    <CeremonyPreviewCard />
    <CeremonyPreviewCard />
  </main>
</div>  
</Suspense>
</template>
