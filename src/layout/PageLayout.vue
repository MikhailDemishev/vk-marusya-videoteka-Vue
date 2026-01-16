<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  pageName: string
  title?: string
}>()

const titleClass = computed(
  () => `${props.pageName}-page__title${props.title ? '' : ' visually-hidden'}`,
)
</script>

<template>
  <div :class="`${pageName}-page`">
    <div class="container">
      <h1 :class="titleClass">
        {{ title ?? '' }}
      </h1>

      <slot />
    </div>
  </div>
</template>
