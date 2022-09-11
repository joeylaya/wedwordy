import { defineStore } from "pinia";
import { sleep } from "../helpers/sleep"

export type TimeOfDay = "morning" | "afternoon" | "evening"
export type Pronouns = "they" | "she" | "he"
export type CeremonialRole = "spouse" | "bride" | "partner" | "groom"
export type PartnershipTitle = "spouse" | "wife" | "partner" | "husband"
export type PlanType = "premium" | "standard"

export interface ICeremony {
  id: string
  name: string,
  date: string,
  timeOfDay: TimeOfDay,
  venue: string,
  city: string,
  state: string,
  planType: PlanType,
  spouses: Array<ISpouse>
}

export interface ISpouse {
  id: string,
  firstName: string,
  lastName: string,
  pronouns: Pronouns,
  ceremonialRole: CeremonialRole,
  partnershipTitle: PartnershipTitle
}

export interface ICeremonyInput {
  id?: string
  date: Date,
  timeOfDay: TimeOfDay,
  venue: string,
  city: string,
  state: string,
  spouses: Array<ISpouseInput>
}

export interface ISpouseInput {
  id?: string,
  firstName: string,
  lastName: string,
  pronouns: Pronouns,
  ceremonialRole: CeremonialRole,
  partnershipTitle: PartnershipTitle
}

export const ceremonyStore = defineStore("ceremony", {
  state: () => ({
    ceremony: Object() as ICeremony,
    ceremonyInput: Object() as ICeremonyInput
  }),

  actions: {
    async getCeremony(ceremonyId: string) {
      console.log(`Getting ceremony with ID of ${ceremonyId}`)
      await sleep(1000)
      const ceremony: ICeremony = {
        id: '1',
        name: "Pharetra & Faucibus",
        date: "January 21, 2024",
        timeOfDay: "morning",
        venue: "Park Winters",
        city: "Winters",
        state: "California",
        planType: "premium",
        spouses: [
          {
            id: '1',
            firstName: 'Pharetra',
            lastName: 'Albi',
            pronouns: 'they',
            ceremonialRole: 'groom',
            partnershipTitle: 'spouse'
          },
          {
            id: '2',
            firstName: 'Faucibus',
            lastName: 'Muko',
            pronouns: 'he',
            ceremonialRole: 'bride',
            partnershipTitle: 'partner'
          }
        ]
      }
      this.ceremony = ceremony
      return ceremony
    },

    updateCeremony() {

    },

    addCeremony() {

    },

    deleteCeremony() {

    },

    upgradeCeremony() {

    }
  }
})
