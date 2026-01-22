import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    themeColor: (localStorage.getItem('themeColor') as 'dark' | 'light') || 'dark',
  }),
  actions: {
    setThemeColor(value: 'dark' | 'light') {
      this.themeColor = value
      localStorage.setItem('themeColor', value)
    },
  },
})
