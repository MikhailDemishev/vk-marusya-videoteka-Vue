import { ref } from 'vue'

type MobileHeaderMode = 'default' | 'search' | 'menu' | 'burger'

export const useMobileHeaderMode = () => {
  const mobileMode = ref<MobileHeaderMode>('default')
  const toggleBurger = () => {
    mobileMode.value = mobileMode.value === 'burger' ? 'menu' : 'burger'
  }

  const resetToDefault = () => (mobileMode.value = 'default')
  const openSearch = () => (mobileMode.value = 'search')
  const openMenu = () => (mobileMode.value = 'menu')

  return {
    mobileMode,
    toggleBurger,
    resetToDefault,
    openSearch,
    openMenu,
  }
}
