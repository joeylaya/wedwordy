<script setup lang="ts">
import { ref, watchEffect } from "vue";
import Navbar from "../components/Navbar.vue";
import ScriptToolbar from "../components/ScriptToolbar.vue";
import ScriptSidebar from "../components/ScriptSidebar.vue";
import ScriptEditor from "../components/ScriptEditor.vue";
import { storeToRefs } from "pinia";
import { globalStore } from "../stores/globalStore";
import { useRoute } from "vue-router";

const useGlobalStore = storeToRefs(globalStore()) 
const { activeBar } = useGlobalStore
const scriptId = useRoute().params
console.log(`Script ID is ${scriptId.id}`)
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
        <h1>Script Builder</h1>
      </header>
      <main class="w-full flex flex-col gap-4">
        <button
          :show="activeBar === 'scriptToolbar'"
          id="activateScriptToolbar"
          aria-label="activate script toolbar"
          @click="activeBar = 'scriptToolbar'"
          class="btn fixed top-0 right-0 p-4 sm:(hidden)"
        >
          <div class="icon text-gray-400">
            <i class="fi fi-br-pencil h-4 text-lg"></i>
          </div>          
        </button>
        <ScriptToolbar
          :show="activeBar === 'scriptToolbar'"
          @deactivate="activeBar = null"
        />
        <div class="flex">
          <ScriptEditor />
          <ScriptSidebar />
        </div>
      </main>
    </div>
  </div>
</Suspense>
</template>
