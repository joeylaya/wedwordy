<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'
const { loginWithRedirect } = useAuth0()
const handleSignIn = () => {
  loginWithRedirect()
}
</script>

<template>
<Suspense>
  <div class="h-screen flex justify-center">
    <div class="w-10/12 md:w-8/12 flex flex-col justify-center text-center">
      <img src="../assets/logos/logo-primary.svg" alt="Wedwordy Logo" />
      <h1 class="header-1 text-gray-800">The only ceremony script app</h1>
      <div class="m-6 md:m-10 flex flex-col md:flex-row justify-center gap-8">
        <button class="btn btn-1">
          <div class="icon icon-btn">
            <i class="fi fi-br-bolt h-4"></i>
          </div>
          <h5>Get Started For Free</h5>
        </button>
        <button @click="handleSignIn" class="btn btn-2">Sign Back In</button>
      </div>
    </div>    
  </div>
</Suspense>
</template>
