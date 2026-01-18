<script setup lang="ts">
import type { Movie } from '@/api/movies/movies.schemas'

defineProps<{
  items: Movie[]
}>()
</script>

<template>
  <ul class="dropdown__list">
    <li v-for="(item, index) in items" :key="index" class="dropdown__item">
      <slot :item="item" :index="index" />
    </li>
  </ul>
</template>
