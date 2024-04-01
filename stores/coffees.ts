import { defineStore } from 'pinia'
import fakeCoffees from '~/public/fakeCoffees'

interface IfakeCoffee {
  name: string,
  ingredients: string[],
  quantity: number
}
export const useCoffeeStore = defineStore('coffees', {
  state: () => ({
    coffeeListSize: 10,
    coffeeList: [] as IfakeCoffee[]
  }),
  getters: {
    getListSize: (state) => state.coffeeListSize,
  },
  actions: {
    getFirstsCoffees() {
      this.coffeeList = fakeCoffees
    },
    changeListSize(newSize: number) {
      this.coffeeListSize = newSize
    },
  },
})
