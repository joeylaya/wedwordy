<script setup lang="ts">
import { reactive, ref } from 'vue';
import SpousePreviewCard from './SpousePreviewCard.vue';
import SpouseAddCard from './SpouseAddCard.vue';
type TimeOfDay = "morning" | "afternoon" | "evening"

const activePage = ref(1)

const formData = reactive({
  date: Date(),
  timeOfDay: String() as TimeOfDay,
  spouses: Array<Object>()
})

const handleTimeOfDay = (selection: TimeOfDay) => {
  formData.timeOfDay = selection
}
const handleBack = () => {
  if(activePage.value > 1) {
    activePage.value--
  } else {
    // close modal
  }
}
const handleSkip = () => {
  // submit without uploading photo
}
const handleNext = () => {
  if(activePage.value < 3) {
    activePage.value++    
  } else {
    // submit form
  }
}
</script>

<template>
<div class="modal w-full h-full rounded-none">
  <div class="flex flex-col gap-6 flex-center text-center w-full h-full px-4 sm:(px-8)">
    <div v-show="activePage === 1" id="page1" class="flex flex-col gap-6 flex-center">
      <h1 class="header-1">When is your ceremony taking place?</h1>
      <div>
        <input :value="formData.date" id="date" type="date" class="form-field">
      </div>
      <div class="flex flex-col gap-2">
        <h5 class="header-5">in the</h5>
        <div class="flex gap-2">
          <button @click="handleTimeOfDay('morning')" class="btn" :class="formData.timeOfDay === 'morning' ? 'btn-selector-selected' : 'btn-selector'">
            <div class="icon icon-selector" :class="formData.timeOfDay === 'morning' ? '' : 'hidden'">
              <i class="fi fi-br-sunrise gradient-text h-4"></i>
            </div>
            <h5 :class="formData.timeOfDay === 'morning' ? 'gradient-text' : ''">Morning</h5>
          </button>
          <button @click="handleTimeOfDay('afternoon')" class="btn" :class="formData.timeOfDay === 'afternoon' ? 'btn-selector-selected' : 'btn-selector'">
            <div class="icon icon-selector" :class="formData.timeOfDay === 'afternoon' ? '' : 'hidden'">
              <i class="fi fi-br-cloud-sun gradient-text h-4"></i>
            </div>
            <h5 :class="formData.timeOfDay === 'afternoon' ? 'gradient-text' : ''">Afternoon</h5>
          </button>
          <button @click="handleTimeOfDay('evening')" class="btn" :class="formData.timeOfDay === 'evening' ? 'btn-selector-selected' : 'btn-selector'">
            <div class="icon icon-selector" :class="formData.timeOfDay === 'evening' ? '' : 'hidden'">
              <i class="fi fi-br-moon-stars gradient-text h-4"></i>
            </div>
            <h5 :class="formData.timeOfDay === 'evening' ? 'gradient-text' : ''">Evening</h5>
          </button>
        </div>
      </div>      
    </div>
    <div v-show="activePage === 2" id="page2" class="flex flex-col gap-6 flex-center">
      <h1 class="header-1">Who's getting married?</h1>
      <div class="flex flex-col gap-2">
        <div class="flex flex-wrap flex-center gap-4">
          <SpousePreviewCard />
          <SpousePreviewCard />
          <SpouseAddCard />
        </div>
      </div>      
    </div>
    <div v-show="activePage === 3" id="page3" class="flex flex-col gap-6 flex-center">
      <h1 class="header-1">Lastly, add a cover photo to personalize your workspace!</h1>
      <button class="btn btn-selector">
        <h5 class="header-5">Upload</h5>
      </button>     
    </div>
    <div class="w-full max-w-200 px-4 fixed bottom-4 flex justify-between sm:(relative px-0)">
      <button @click="handleBack" class="btn btn-2">
        <h5 v-if="activePage === 1">Cancel</h5>
        <h5 v-else>Back</h5>
      </button>
      <div class="flex gap-4">
        <button v-if="activePage === 3" @click="handleSkip" class="btn btn-2">
          <h5>Skip</h5>
        </button>
        <button @click="handleNext" class="btn btn-1">
          <div class="icon icon-btn">
            <i class="fi fi-br-check h-4"></i>
          </div>
          <h5 v-if="activePage !== 3">Continue</h5>
          <h5 v-else>Get Started</h5>
        </button>        
      </div>
    </div>
  </div>
</div>
</template>
