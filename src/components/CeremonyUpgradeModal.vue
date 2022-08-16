<script setup lang="ts">
</script>
<template>
  <div class="modal w-74 p-8 gap-4 sm:(gap-0 w-132)">
    <h2 class="header-2 text-center p-2 sm:p-8">Upgrade to Premium to unlock all features</h2>
    <div class="flex flex-col flex-center sm:(flex-row justify-between)">
      <div class="flex flex-col flex-center sm:(flex-row order-last gap-2)">
        <button class="btn btn-1 sm:(order-last)">
          <div class="icon icon-btn">
            <i class="fi fi-br-bolt h-4"></i>
          </div>
          <h5>Upgrade</h5>
        </button>
        <button class="btn btn-2">
          <h5>Learn More</h5>
        </button>
      </div>
      <button class="btn btn-2 sm:(order-first)">
        <h5>No, Thanks</h5>
      </button>
    </div>
  </div>
</template>
