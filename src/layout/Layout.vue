<script setup lang="ts">
import { useThemeStore } from '@/stores/theme.store'
import Footer from './Footer.vue'
import Header from './Header.vue'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const themeStore = useThemeStore()
const { themeColor } = storeToRefs(themeStore)

watch(
  themeColor,
  (value) => {
    localStorage.setItem('themeColor', value)
    document.documentElement.setAttribute('data-theme', value)
  },
  { immediate: true },
)
</script>

<template>
  <div class="layout">
    <Header />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>
