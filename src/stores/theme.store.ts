import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore(
  'theme',
  () => {
    const themeColor = ref<'dark' | 'light'>('dark')

    function setThemeColor(value: 'dark' | 'light') {
      themeColor.value = value
    }

    return {
      themeColor,
      setThemeColor,
    }
  },
  {
    persist: {
      key: 'themeColor',
      storage: localStorage,
    },
  },
)
