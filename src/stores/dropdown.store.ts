import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDropDownStore = defineStore('dropdown', () => {
  const isOpen = ref(false)

  const openDropDown = () => (isOpen.value = true)
  const closeDropDown = () => (isOpen.value = false)
  const toggleDropDown = () => (isOpen.value = !isOpen.value)

  return {
    isOpen,
    openDropDown,
    closeDropDown,
    toggleDropDown,
  }
})
