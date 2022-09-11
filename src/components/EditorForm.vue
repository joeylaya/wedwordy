<script setup lang="ts">
import { reactive } from 'vue';


const formData = reactive({
  fullName: String(),
  email: "email"
})
const handleCancel = () => {

}
const handleSubmit = () => {

}
</script>
<template>
  <form class="modal w-74 p-4 gap-4 sm:(w-132 p-8)">
    <div class="flex flex-col flex-center gap-2">
      <h2 class="header-2">Invite a new editor</h2>
      <p class="text-sm text-center sm:(text-md)">Editors can see and edit all ceremony details and scripts in this workspace. Only you can add more editors.</p>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <label for="fullName" class="header-5">Full Name</label>
        <input id="fullName" type="text" class="form-field">
      </div>
      <div class="flex flex-col gap-1">
        <label for="email" class="header-5">Email</label>
        <input :value="formData.email" id="email" type="email" class="form-field">
      </div>
    </div>
    <div class="flex flex-center justify-between">
      <button @click.prevent="handleCancel" class="btn btn-2">
        <h5>Cancel</h5>
      </button>
      <button @click.prevent="handleSubmit" type="submit" class="btn btn-1">
        <div class="icon icon-btn">
          <i class="fi fi-br-paper-plane"></i>
        </div>
        <h5>Invite</h5>
      </button>
    </div>
  </form>
</template>
