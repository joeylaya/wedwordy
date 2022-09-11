<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps([
  'id',
  'name',
  'invitedAt',
  'joinedAt'
])

const userDetails = ref()
if (props.invitedAt == null && props.joinedAt == null) {
  userDetails.value = "Owner"
} else if (props.joinedAt == null) {
  userDetails.value = `Invited at ${props.invitedAt}`
} else {
  userDetails.value = `Joined at ${props.joinedAt}`
}
</script>

<template>
<div :id="id" class="min-w-64 flex gap-4 sm:(gap-6)">
  <img src="../assets/images/test.jpg" alt="" class="w-20 h-20 rounded-full object-cover sm:(w-24 h-24)">
  <div class="flex flex-col">
    <h3 class="header-3">{{ name }}</h3>
    <h5 class="header-5">{{ userDetails }}</h5>
    <button v-if="userDetails != 'Owner'" class="btn btn-2 justify-start">Remove</button>
  </div>
</div>
</template>
