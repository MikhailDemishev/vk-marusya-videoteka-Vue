<script setup lang="ts">
export type INavItem = {
  label: string
  to: string
}

defineProps<{
  items: INavItem[]
}>()

const emit = defineEmits<{
  (e: 'select'): void
}>()
</script>

<template>
  <nav class="nav">
    <RouterLink
      v-for="item in items"
      :to="item.to"
      :key="item.to"
      class="nav__link"
      active-class="nav__link--active"
      @click="emit('select')"
      >{{ item.label }}</RouterLink
    >
  </nav>
</template>
