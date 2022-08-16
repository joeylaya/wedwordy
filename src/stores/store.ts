import { defineStore } from "pinia";

export const store = defineStore("store", {
  state: () => ({
    isNavbarExpanded: Boolean(false),
    isScriptSidebarActive: Boolean(false)
  }),

  actions: {

  }
})
