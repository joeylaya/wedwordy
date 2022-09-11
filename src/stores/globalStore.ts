import { defineStore } from "pinia";

export type Modal = "ceremonyForm" | "spouseForm" | "editorForm" | "editorWidget" | "scriptWidget" | "scriptTemplateModal" | "elementTemplateForm" | "elementTemplatePreview" | "ceremonyUpgrade"
export type Bar = "navbar" | "scriptToolbar" | "scriptSidebar" | "elementTemplateFormSidebar"

export const globalStore = defineStore("global", {
  state: () => ({
    activeModal: null as Modal | null,
    activeBar: null as Bar | null,
  }),

  actions: {

  }
})
