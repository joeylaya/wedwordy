<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
import ScriptToolbar from "../components/ScriptToolbar.vue";
import ScriptDisplay from "../components/ScriptDisplay.vue";
import ScriptSidebar from "../components/ScriptSidebar.vue";
</script>

<template>
<Suspense>
<div class="flex">
  <Navbar />
  <div class="w-screen mb-18 pl-4 py-4 flex flex-col gap-2 sm:(ml-24 p-16 gap-6)">
    <header class="page-header">Script Builder</header>
    <main class="w-full flex flex-col gap-8">
      <ScriptToolbar />
      <div class="flex">
        <ScriptDisplay />
        <ScriptSidebar />
      </div>
    </main>
  </div>
</div>
</Suspense>
</template>
