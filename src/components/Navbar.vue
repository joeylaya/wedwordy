<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
import { useRoute } from 'vue-router';
import { ref, watchEffect } from 'vue';
import { store } from '@/stores/store';

const activePage = ref(useRoute().name)
watchEffect(() => {
  activePage.value = useRoute().name
  console.log(activePage.value)
})

const isExpanded = ref(false)
const toggleExpansion = () => {
  isExpanded.value = !isExpanded.value
  store().isNavbarExpanded = isExpanded.value
}
const handleScripts = () => {

}
const handleEditors = () => {

}
const handleUpgrade = () => {

}
const handleSupport = () => {

}
const handleLogout = () => {
  useAuth0().logout()
}
</script>

<template>
  <button class="btn fixed top-0 p-4 z-100 sm:(hidden)" @click="toggleExpansion" :class="isExpanded ? 'hidden' : ''">
    <div class="icon text-primary-500">
      <i class="fi fi-br-menu-burger h-4 text-lg"></i>
    </div>
  </button>
  <div class="min-h-screen p-4 fixed flex flex-col gap-2 justify-between place-items-center bg-gray-100 shadow z-20" :class="isExpanded ? 'w-46 sm:(w-56)' : 'w-18 <sm:(hidden)'">
    <div class="w-full flex flex-col place-items-center gap-4 sm:(gap-8)">
      <div class="w-full justify-between flex sm:(flex-col gap-8)">
        <img src="../assets/logos/logo-icon-primary.svg" class="w-12" :class="isExpanded ? 'sm:(hidden)' : ''" />
        <img src="../assets/logos/logo-primary.svg" class="w-44 mt-1 hidden" :class="isExpanded ? 'sm:(block)' : ''" />
        <button @click="toggleExpansion" class="btn sm:(order-first)" :class="isExpanded ? 'justify-end' : 'justify-center'">
          <div class="icon text-gray-400 text-lg">
            <i class="fi h-4" :class="isExpanded ? 'fi-br-angle-left' : 'fi-br-angle-right'"></i>
          </div>
        </button>
      </div>
      <nav class="w-full flex flex-col gap-2 sm:gap-4">
        <RouterLink :to="{ name: 'ceremonyDashboard', params: { id: 1 } }">
          <button class="btn btn-nav" :class="activePage == 'ceremonyDashboard' ? 'bg-primary-100 text-primary-500' : ''">
            <div class="icon icon-nav">
              <i class="fi fi-br-home h-4.5 sm:h-5.5"></i>
            </div>
            <h5 :class="isExpanded ? 'block' : 'hidden'">Dashboard</h5>
          </button>
        </RouterLink>
        <button @click="handleScripts" class="btn btn-nav" :class="activePage == 'scriptBuilder' ? 'bg-primary-100 text-primary-500' : ''">
          <div class="icon icon-nav">
            <i class="fi fi-br-document h-4.5 sm:h-5.5"></i>
          </div>
          <h5 :class="isExpanded ? 'block' : 'hidden'">Scripts</h5>
        </button>
        <RouterLink :to="{ name: 'myCeremonies' }">
          <button class="btn btn-nav" :class="activePage == 'myCeremonies' ? 'bg-primary-100 text-primary-500' : ''">
            <div class="icon icon-nav">
              <i class="fi fi-br-heart h-4.5 sm:h-5.5"></i>
            </div>
            <h5 :class="isExpanded ? 'block' : 'hidden'">Ceremonies</h5>
          </button>
        </RouterLink>
        <button @click="handleEditors" class="btn btn-nav">
          <div class="icon icon-nav">
            <i class="fi fi-br-user h-4.5 sm:h-5.5"></i>
          </div>
          <h5 :class="isExpanded ? 'block' : 'hidden'">Editors</h5>
        </button>
        <RouterLink :to="{ name: 'settings' }">
          <button class="btn btn-nav" :class="activePage == 'settings' ? 'bg-primary-100 text-primary-500' : ''">
            <div class="icon icon-nav">
              <i class="fi fi-br-settings-sliders h-4.5 sm:h-5.5"></i>
            </div>
            <h5 :class="isExpanded ? 'block' : 'hidden'">Settings</h5>
          </button>
        </RouterLink>
      </nav>
    </div>
    <div class="w-full flex flex-col gap-2 sm:gap-4">
      <button @click="handleUpgrade" class="btn btn-nav">
        <div class="icon icon-nav">
          <i class="fi fi-br-bolt h-4.5 sm:h-5.5"></i>
        </div>
        <h5 :class="isExpanded ? 'block' : 'hidden'">Upgrade</h5>
      </button>
      <button @click="handleSupport" class="btn btn-nav">
        <div class="icon icon-nav">
          <i class="fi fi-br-interrogation h-4.5 sm:h-5.5"></i>
        </div>
        <h5 :class="isExpanded ? 'block' : 'hidden'">Support</h5>
      </button>
      <button @click="handleLogout" class="btn btn-nav">
        <div class="icon icon-nav">
          <i class="fi fi-br-sign-out-alt h-4.5 sm:h-5.5"></i>
        </div>
        <h5 :class="isExpanded ? 'block' : 'hidden'">Logout</h5>
      </button>
    </div>
  </div>
</template>
