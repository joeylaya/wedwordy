<script setup lang="ts">
import ElementDisplayCard from "./ElementDisplayCard.vue";</script>

<template>
  <div class="w-full h-full p-4 gap-6 modal rounded-none z-10 overflow-y-scroll sm:(w-204 min-w-204 max-h-full h-auto p-12 bg-gray-100 shadow)">
    <div class="flex justify-between">
      <header class="page-header">Script Preview</header>
      <div class="mt-8 flex flex-center gap-2 sm:(mt-0)">
        <button class="btn">
          <div class="icon text-gray-500">
            <i class="fi fi-br-angle-left h-5"></i>
          </div>
        </button>
        <p class="text-gray-500"> 2 of 13</p>
        <button class="btn">
          <div class="icon text-gray-500">
            <i class="fi fi-br-angle-right h-5"></i>
          </div>
        </button>
      </div>
    </div>
    <div class="flex gap-2">
      <button class="btn btn-1">
        <div class="icon icon-btn">
          <i class="fi fi-br-angle-left h-4"></i>
        </div>
        <h5>Back to all</h5>
      </button>
      <button class="btn btn-1">
        <div class="icon icon-btn">
          <i class="fi fi-br-check h-4"></i>
        </div>
        <h5>Select Template</h5>
      </button>
    </div>
    <section class="flex flex-col gap-4">
      <header>
        <h4 class="header-4">Short & Sweet Ceremony</h4>
      </header>
      <ElementDisplayCard />
      <ElementDisplayCard />
      <ElementDisplayCard />
      <ElementDisplayCard />   
    </section>
  </div>
</template>
