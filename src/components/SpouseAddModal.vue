<script setup lang="ts">
import { reactive, ref } from 'vue';
type Pronouns = "they" | "she" | "he"
type CeremonialRole = "spouse" | "bride" | "partner" | "groom"
type PartnershipTitle = "spouse" | "wife" | "partner" | "husband"

const activePage = ref(1)

const formData = reactive({
  firstName: String(),
  lastName: String(),
  pronouns: String() as Pronouns,
  ceremonialRole: String() as CeremonialRole,
  partnershipTitle: String() as PartnershipTitle
})

const handlePronouns = (selection: Pronouns) => {
  formData.pronouns = selection
}
const handleCeremonialRole = (selection: CeremonialRole) => {
  formData.ceremonialRole = selection
}
const handlePartnershipTitle = (selection: PartnershipTitle) => {
  formData.partnershipTitle = selection
}
const handleBack = () => {
  if(activePage.value > 1) {
    activePage.value--
  } else {
    // close modal
  }
}
const handleNext = () => {
  if(activePage.value < 2) {
    activePage.value++    
  } else {
    // emit to ceremony add modal
  }
}
</script>

<template>
<div class="modal w-full h-full rounded-none">
  <div class="flex flex-col gap-6 flex-center text-center w-full h-full px-4 sm:(px-8)">
    <div v-show="activePage === 1" id="page1" class="flex flex-col gap-6 flex-center">
      <h1 class="header-1">What's their name?</h1>
      <div class="flex flex-col gap-4 text-left">
        <div class="flex flex-col gap-1">
          <label for="firstName" class="header-5">First Name</label>
          <input :value="formData.firstName" id="firstName" type="text" class="form-field">
        </div>
        <div class="flex flex-col gap-1">
          <label for="lastName" class="header-5">Last Name</label>
          <input :value="formData.lastName" id="lastName" type="text" class="form-field">
        </div>
      </div>     
    </div>
    <div v-show="activePage === 2" id="page2" class="flex flex-col gap-6 flex-center">
      <h1 class="header-1">How would they like to be referred to in the ceremony?</h1>
      <section id="pronouns" class="flex flex-col gap-2">
        <h5 class="header-5">Pronouns</h5>
        <div class="flex flex-wrap flex-center gap-2">
          <button @click="handlePronouns('they')" class="btn" :class="formData.pronouns === 'they' ? 'btn-selector-selected' : 'btn-selector'">
            <div class="icon icon-selector" :class="formData.pronouns === 'they' ? '' : 'hidden'">
              <i class="fi fi-br-check gradient-text h-4"></i>
            </div>
            <h5 :class="formData.pronouns === 'they' ? 'gradient-text' : ''">They</h5>
          </button>
          <button @click="handlePronouns('she')" class="btn" :class="formData.pronouns === 'she' ? 'btn-selector-selected' : 'btn-selector'">
            <div class="icon icon-selector" :class="formData.pronouns === 'she' ? '' : 'hidden'">
              <i class="fi fi-br-check gradient-text h-4"></i>
            </div>
            <h5 :class="formData.pronouns === 'she' ? 'gradient-text' : ''">She</h5>
          </button>
          <button @click="handlePronouns('he')" class="btn" :class="formData.pronouns === 'he' ? 'btn-selector-selected' : 'btn-selector'">
            <div class="icon icon-selector" :class="formData.pronouns === 'he' ? '' : 'hidden'">
              <i class="fi fi-br-check gradient-text h-4"></i>
            </div>
            <h5 :class="formData.pronouns === 'he' ? 'gradient-text' : ''">He</h5>
          </button>
        </div>
      </section>
      <section id="ceremonialRole" class="flex flex-col gap-2">
        <h5 class="header-5">Ceremonial Role</h5>
        <div class="flex flex-wrap flex-center gap-2">
          <button @click="handleCeremonialRole('spouse')" class="btn" :class="formData.ceremonialRole === 'spouse' ? 'btn-selector-selected' : 'btn-selector'">
            <div class="icon icon-selector" :class="formData.ceremonialRole === 'spouse' ? '' : 'hidden'">
              <i class="fi fi-br-check gradient-text h-4"></i>
            </div>
            <h5 :class="formData.ceremonialRole === 'spouse' ? 'gradient-text' : ''">Spouse</h5>
          </button>
          <button @click="handleCeremonialRole('bride')" class="btn" :class="formData.ceremonialRole === 'bride' ? 'btn-selector-selected' : 'btn-selector'">
            <div class="icon icon-selector" :class="formData.ceremonialRole === 'bride' ? '' : 'hidden'">
              <i class="fi fi-br-check gradient-text h-4"></i>
            </div>
            <h5 :class="formData.ceremonialRole === 'bride' ? 'gradient-text' : ''">Bride</h5>
          </button>
          <button @click="handleCeremonialRole('partner')" class="btn" :class="formData.ceremonialRole === 'partner' ? 'btn-selector-selected' : 'btn-selector'">
            <div class="icon icon-selector" :class="formData.ceremonialRole === 'partner' ? '' : 'hidden'">
              <i class="fi fi-br-check gradient-text h-4"></i>
            </div>
            <h5 :class="formData.ceremonialRole === 'partner' ? 'gradient-text' : ''">Partner</h5>
          </button>
          <button @click="handleCeremonialRole('groom')" class="btn" :class="formData.ceremonialRole === 'groom' ? 'btn-selector-selected' : 'btn-selector'">
            <div class="icon icon-selector" :class="formData.ceremonialRole === 'groom' ? '' : 'hidden'">
              <i class="fi fi-br-check gradient-text h-4"></i>
            </div>
            <h5 :class="formData.ceremonialRole === 'groom' ? 'gradient-text' : ''">Groom</h5>
          </button>
        </div>
      </section>
      <section id="partnershipTitle" class="flex flex-col gap-2">
        <h5 class="header-5">Partnership Title</h5>
        <div class="flex flex-wrap flex-center gap-2">
          <button @click="handlePartnershipTitle('spouse')" class="btn" :class="formData.partnershipTitle === 'spouse' ? 'btn-selector-selected' : 'btn-selector'">
            <div class="icon icon-selector" :class="formData.partnershipTitle === 'spouse' ? '' : 'hidden'">
              <i class="fi fi-br-check gradient-text h-4"></i>
            </div>
            <h5 :class="formData.partnershipTitle === 'spouse' ? 'gradient-text' : ''">Spouse</h5>
          </button>
          <button @click="handlePartnershipTitle('wife')" class="btn" :class="formData.partnershipTitle === 'wife' ? 'btn-selector-selected' : 'btn-selector'">
            <div class="icon icon-selector" :class="formData.partnershipTitle === 'wife' ? '' : 'hidden'">
              <i class="fi fi-br-check gradient-text h-4"></i>
            </div>
            <h5 :class="formData.partnershipTitle === 'wife' ? 'gradient-text' : ''">Wife</h5>
          </button>
          <button @click="handlePartnershipTitle('partner')" class="btn" :class="formData.partnershipTitle === 'partner' ? 'btn-selector-selected' : 'btn-selector'">
            <div class="icon icon-selector" :class="formData.partnershipTitle === 'partner' ? '' : 'hidden'">
              <i class="fi fi-br-check gradient-text h-4"></i>
            </div>
            <h5 :class="formData.partnershipTitle === 'partner' ? 'gradient-text' : ''">Partner</h5>
          </button>
          <button @click="handlePartnershipTitle('husband')" class="btn" :class="formData.partnershipTitle === 'husband' ? 'btn-selector-selected' : 'btn-selector'">
            <div class="icon icon-selector" :class="formData.partnershipTitle === 'husband' ? '' : 'hidden'">
              <i class="fi fi-br-check gradient-text h-4"></i>
            </div>
            <h5 :class="formData.partnershipTitle === 'husband' ? 'gradient-text' : ''">Husband</h5>
          </button>
        </div>
      </section>   
    </div>
    <div class="w-full max-w-200 px-4 fixed bottom-4 flex justify-between sm:(relative px-0)">
      <button @click="handleBack" class="btn btn-2">
        <h5>Back</h5>
      </button>
      <div class="flex gap-4">
        <button @click="handleNext" class="btn btn-1">
          <div class="icon icon-btn">
            <i class="fi fi-br-check h-4"></i>
          </div>
          <h5 v-if="activePage !== 2">Continue</h5>
          <h5 v-else>Done</h5>
        </button>        
      </div>
    </div>
  </div>
</div>
</template>
