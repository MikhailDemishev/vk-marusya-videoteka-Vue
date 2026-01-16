<script setup lang="ts">
import { useThemeStore } from '@/stores/theme.store'
import { storeToRefs } from 'pinia'

const themeStore = useThemeStore()
const { setThemeColor } = themeStore
const { themeColor } = storeToRefs(themeStore)
defineProps<{
  parentClassName?: string
}>()
const handleChangeColor = () => {
  setThemeColor(themeColor.value === 'dark' ? 'light' : 'dark')
}
</script>
<template>
  <button
    class="theme-switcher"
    :class="parentClassName && `${parentClassName}__theme-switcher`"
    @click="handleChangeColor"
  >
    <svg class="theme-switcher__logo" width="20" height="20" aria-hidden="true">
      <use v-if="themeColor === 'dark'" href="/sprite.svg#icon-sun" />
      <use v-else href="/sprite.svg#icon-moon" />
    </svg>
  </button>
</template>
