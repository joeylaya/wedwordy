<script setup lang="ts">
import { reactive, ref } from 'vue';
import SpouseCard from './SpouseCard.vue';
import SpouseAdd from './SpouseAdd.vue';
import type { TimeOfDay } from '../stores/ceremonyStore';

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
  <form method="post" autocomplete="on" class="formContainer">
    <section id="page1" v-show="activePage === 1" class="formPage">
      <header>
        <h1 class="header-1">When is your ceremony taking place?</h1>
      </header>
      <div>
        <input
          id="date"
          aria-label="ceremony date"
          type="date"
          :value="formData.date"
          class="form-field"
        >
        <div class="flex flex-col gap-2">
          <h5 aria-hidden="true" class="header-5">in the</h5>
          <div aria-label="time of day options" class="flex gap-2">
            <button
              id="morning"
              aria-label="morning"
              @click.prevent="handleTimeOfDay('morning')"
              class="btn"
              :class="formData.timeOfDay === 'morning' ? 'btn-selector-selected' : 'btn-selector'"
            >
              <div
                :show="formData.timeOfDay === 'morning'"
                class="icon icon-selector"
              >
                <i class="fi fi-br-sunrise h-4"></i>
              </div>
              <h5>Morning</h5>
            </button>
            <button
              id="afternoon"
              aria-label="afternoon"
              @click.prevent="handleTimeOfDay('afternoon')"
              class="btn"
              :class="formData.timeOfDay === 'afternoon' ? 'btn-selector-selected' : 'btn-selector'"
            >
              <div
                :show="formData.timeOfDay === 'afternoon'"
                class="icon icon-selector"
              >
                <i class="fi fi-br-cloud-sun h-4"></i>
              </div>
              <h5>Afternoon</h5>
            </button>
            <button
              id="evening"
              aria-label="evening"
              @click.prevent="handleTimeOfDay('evening')"
              class="btn"
              :class="formData.timeOfDay === 'evening' ? 'btn-selector-selected' : 'btn-selector'"
            >
              <div
                :show="formData.timeOfDay === 'evening'"
                class="icon icon-selector"
              >
                <i class="fi fi-br-moon-stars h-4"></i>
              </div>
              <h5>Evening</h5>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section id="page2" v-show="activePage === 2" class="formPage">
      <header>
        <h1 class="header-1">Who's getting married?</h1>
      </header>
      <div aria-label="spouse cards" class="flex flex-wrap flex-center gap-4">
        <SpouseCard />
        <SpouseCard />
        <SpouseAdd />
      </div>
    </section>
    <section id="page3" v-show="activePage === 3" class="formPage">
      <header>
        <h1 class="header-1">Lastly, add a cover photo to personalize your workspace!</h1>
      </header>
      <div>
        <button id="coverImage" aria-label="cover image upload" class="btn btn-selector">
          <h5 class="header-5">Upload</h5>
        </button>          
      </div>
    </section>
    <section id="formButtons" class="formButtons">
      <div id="leftButtons">
        <button id="previousPage" :aria-label="activePage === 1 ? 'cancel and close form' : 'previous page'" @click.prevent="handleBack" class="btn btn-2">
          <h5 v-if="activePage === 1">Cancel</h5>
          <h5 v-else>Back</h5>
        </button>        
      </div>
      <div id="rightButtons" class="flex gap-4">
        <button id="skipPage" aria-label="skip uploading an image and submit form" v-if="activePage === 3" @click.prevent="handleSkip" class="btn btn-2">
          <h5>Skip</h5>
        </button>
        <button id="nextPage" :aria-label="activePage !== 3 ? 'next page' : 'submit form'" @click.prevent="handleNext" class="btn btn-1">
          <div class="icon icon-btn">
            <i class="fi fi-br-check h-4"></i>
          </div>
          <h5 v-if="activePage !== 3">Continue</h5>
          <h5 v-else>Get Started</h5>
        </button>        
      </div>
    </section>
  </form>
</div>
</template>
