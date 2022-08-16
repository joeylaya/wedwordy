<script setup lang="ts">
import { ref } from 'vue';

const isPreview = ref(false)
const isExpanded = ref(false)
const handleCollapse = () => {
  isExpanded.value = false
}
const handleExpand = () => {
  isExpanded.value = true
}
</script>

<template>
<section class="w-full flex flex-col gap-1">
  <header class="flex justify-between place-items-center">
    <div class="flex flex-col sm:(flex-row gap-6 place-items-center)">
      <h5 class="header-5">Velit consequat arcu, iaculis</h5>
      <p class="text-sm text-gray-500">Sollicitudin ornare</p>
    </div>
    <div class="flex gap-1 place-items-center">
      <button v-if="!isPreview">
        <div class="icon icon-element">
          <i class="fi fi-br-exchange h-4 sm:(h-6)"></i>
        </div>
      </button>
      <button v-if="!isPreview">
        <div class="icon icon-element">
          <i class="fi fi-br-trash h-4 sm:(h-6)"></i>
        </div>
      </button>
      <button v-if="isExpanded" @click="handleCollapse">
        <div class="icon icon-element">
          <i class="fi fi-br-angle-up h-4 sm:(h-6)"></i>
        </div>
      </button>
      <button v-if="!isExpanded" @click="handleExpand">
        <div class="icon icon-element">
          <i class="fi fi-br-angle-down h-4 sm:(h-6)"></i>
        </div>
      </button>
    </div>
  </header>
  <div v-if="isExpanded">
    <p class="text-sm">
      Ornare gravida pellentesque odio in dis enim lacus. Nunc risus id nascetur tempus. Ipsum arcu tellus quis pharetra, in duis viverra. Morbi placerat ullamcorper at adipiscing nunc eu ornare in sollicitudin. Mi faucibus elit viverra adipiscing velit pulvinar. Morbi nisl aliquet et blandit et bibendum magna. Quis nunc imperdiet curabitur nulla. Vivamus ultrices varius ipsum, suscipit odio mauris vitae congue mi. Aliquam erat facilisis quis neque. Bibendum tellus mauris ac nulla fames adipiscing. Faucibus congue sagittis, arcu, eget ac hac ut tempor sed. Nisi, dignissim velit maecenas mi sit.
      Volutpat adipiscing auctor ut nulla ipsum velit. Neque tincidunt vulputate sed erat diam amet. Ipsum tincidunt adipiscing pharetra id id. Luctus diam id posuere ullamcorper aliquet mi. Diam nec dictum magna tempor nec. Varius integer accumsan dignissim quam at condimentum ullamcorper metus. Pellentesque nisl facilisis amet pellentesque massa ridiculus duis. Ullamcorper elementum neque ullamcorper integer nibh scelerisque iaculis lacus.
      Sed mauris, vitae in vulputate purus rutrum morbi imperdiet. Nisi et gravida quis ultrices ut massa viverra ac et. Curabitur id at scelerisque scelerisque.
    </p>
  </div>
</section>
</template>
