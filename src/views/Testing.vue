<script setup lang="ts">
import CeremonyDetails from "../components/CeremonyDetails.vue";
import CeremonyDetailsSkeleton from "../components/CeremonyDetailsSkeleton.vue";
</script>

<template>
<Suspense>
  <div class="w-100">
    <CeremonyDetails :ceremonyId="'1'" />
    <CeremonyDetailsSkeleton />    
  </div>
</Suspense>
</template>
