<script setup lang="ts">
import type { IDropdownWindow } from '@/assets/types/type.dropdown'

defineProps<IDropdownWindow>()
</script>

<template>
  <div v-show="isOpen" :class="`${classExt}__dropdown dropdown`">
    <slot />
  </div>
</template>
