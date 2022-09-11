import { sleep } from "../helpers/sleep";
import { defineStore } from "pinia";

export interface IUserCard {
  id: string,
  name: string,
  invitedAt: string | null,
  joinedAt: string | null
}

export interface IUser {
  id: string,
  name: string,
  email: string,
  ceremonies: Array<ICeremonyCard>
}

export interface ICeremonyCard {
  id: string,
  name: string,
  date: string
}

export interface IUserInput {
  id?: string,
  name: string,
  email: string
}

export const userStore = defineStore("user", {
  state: () => ({
    userCards: Array<IUserCard>(),
    user: Object() as IUser,
    userInput: Object() as IUserInput
  }),

  actions: {
    async getUserCards(ceremonyId: string) {
      console.log(`Getting user cards for ceremony with ID of ${ceremonyId}`)
      await sleep(2000)
      const userCards: Array<IUserCard> = [
        {
          id: '3',
          name: 'Joey Laya',
          invitedAt: null,
          joinedAt: null
        },
        {
          id: '1',
          name: 'Morbi Sem',
          invitedAt: 'March 10, 2021',
          joinedAt: 'March 12, 2021'
        },
        {
          id: '2',
          name: 'Phare Nulbous',
          invitedAt: 'April 2, 2021',
          joinedAt: null
        },
      ]
      this.userCards = userCards
      return userCards
    },

    inviteEditor() {

    },

    removeEditor() {

    }
  }
})
