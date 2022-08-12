<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
const { logout } = useAuth0()
const handleLogout = () => {
  logout()
}
</script>

<template>
  <div class="w-full h-24 bg-gray-800 fixed bottom-0 sm:(w-30 h-full min-h-screen py-14 fixed flex flex-col justify-between place-items-center)">
    <div class="h-full flex justify-center place-items-center gap-8 sm:(flex-col justify-start)">
      <img src="../assets/logos/logo-icon-white.svg" class="hidden sm:(w-18 block)" />
      <nav class="flex gap-8 place-items-center sm:(flex-col gap-6)">
        <RouterLink :to="{ name: 'ceremonyDashboard', params: { id: 1 }}">
          <button class="btn">
            <div class="icon icon-nav">
              <i class="fi fi-br-home h-8"></i>
            </div>
          </button>          
        </RouterLink>
        <button class="btn">
          <div class="icon icon-nav">
            <i class="fi fi-br-plus h-8"></i>
          </div>
        </button>
        <button class="btn">
          <div class="icon icon-nav">
            <i class="fi fi-br-user h-8"></i>
          </div>
        </button>
      </nav>
    </div>
    <div>
      <button @click="handleLogout" class="btn">
        <div class="icon icon-nav">
          <i class="fi fi-br-exit h-8"></i>
        </div>
      </button>
    </div>
  </div>
</template>
