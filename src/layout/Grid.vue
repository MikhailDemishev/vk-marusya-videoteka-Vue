<script setup lang="ts" generic="T">
import type { IGridProps } from '@/assets/types/type.grid'

const props = withDefaults(defineProps<IGridProps<T>>(), {
  showCloseButton: false,
  classExt: '',
})
</script>
<template>
  <ul :class="[`${props.classExt}-grid`]">
    <li v-for="(item, index) in props.items" :key="index" :class="[`${props.classExt}-grid__item`]">
      <slot :item="item" :index="index" :showCloseButton="props.showCloseButton" />
    </li>
  </ul>
</template>
