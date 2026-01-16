<script setup lang="ts">
import type { Movie } from '@/api/movies/movies.schemas'
import { colorByRating } from '@/utils/colorByRating'
import { round } from '@/utils/round'
import { computed } from 'vue'
const props = defineProps<{
  movie: Movie
  classExt?: string
}>()

const movieRating = computed(() => round(props.movie.tmdbRating))
</script>

<template>
  <div
    :class="[
      'rating',
      `rating--${colorByRating(movieRating)}`,
      props.classExt && `${props.classExt}__rating`,
    ]"
  >
    <svg class="rating__logo" aria-hidden="true">
      <use href="/sprite.svg#star" />
    </svg>
    <span class="rating__value">{{ movieRating }}</span>
  </div>
</template>
