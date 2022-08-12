<script setup lang="ts">
import { ref } from 'vue';

const expanded = ref(false)
const handleCollapse = () => {
  expanded.value = false
}
const handleExpand = () => {
  expanded.value = true
}
</script>

<template>
<section class="w-full flex flex-col">
  <header class="flex justify-between place-items-center">
    <div class="flex gap-6 place-items-center">
      <h5 class="header-5">Velit consequat arcu, iaculis</h5>
      <p class="text-sm">Sollicitudin ornare</p>
    </div>
    <div class="flex gap-1 place-items-center">
      <button>
        <div class="icon w-9 h-9 text-lg text-gray-500">
          <i class="fi fi-br-exchange h-6"></i>
        </div>
      </button>
      <button>
        <div class="icon w-9 h-9 text-lg text-gray-500">
          <i class="fi fi-br-trash h-6"></i>
        </div>
      </button>
      <button v-if="expanded" @click="handleCollapse">
        <div class="icon w-9 h-9 text-lg text-gray-500">
          <i class="fi fi-br-angle-up h-6"></i>
        </div>
      </button>
      <button v-if="!expanded" @click="handleExpand">
        <div class="icon w-9 h-9 text-lg text-gray-500">
          <i class="fi fi-br-angle-down h-6"></i>
        </div>
      </button>
    </div>
  </header>
  <div v-if="expanded">
    <p class="text-sm">
      Ornare gravida pellentesque odio in dis enim lacus. Nunc risus id nascetur tempus. Ipsum arcu tellus quis pharetra, in duis viverra. Morbi placerat ullamcorper at adipiscing nunc eu ornare in sollicitudin. Mi faucibus elit viverra adipiscing velit pulvinar. Morbi nisl aliquet et blandit et bibendum magna. Quis nunc imperdiet curabitur nulla. Vivamus ultrices varius ipsum, suscipit odio mauris vitae congue mi. Aliquam erat facilisis quis neque. Bibendum tellus mauris ac nulla fames adipiscing. Faucibus congue sagittis, arcu, eget ac hac ut tempor sed. Nisi, dignissim velit maecenas mi sit.
      Volutpat adipiscing auctor ut nulla ipsum velit. Neque tincidunt vulputate sed erat diam amet. Ipsum tincidunt adipiscing pharetra id id. Luctus diam id posuere ullamcorper aliquet mi. Diam nec dictum magna tempor nec. Varius integer accumsan dignissim quam at condimentum ullamcorper metus. Pellentesque nisl facilisis amet pellentesque massa ridiculus duis. Ullamcorper elementum neque ullamcorper integer nibh scelerisque iaculis lacus.
      Sed mauris, vitae in vulputate purus rutrum morbi imperdiet. Nisi et gravida quis ultrices ut massa viverra ac et. Curabitur id at scelerisque scelerisque.
    </p>
  </div>
</section>
</template>
