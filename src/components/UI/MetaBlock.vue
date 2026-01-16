<script setup lang="ts">
import type { Movie } from '@/api/movies/movies.schemas'
import { translatedGenres } from '@/utils/translateGenres'
import { computed } from 'vue'
import RatingBadge from './RatingBadge.vue'
import { formatMinutes } from '@/utils/formatMinutes'

const props = defineProps<{
  movie: Movie
  classExt: string
}>()

const genresToRender = computed(() => translatedGenres(props.movie.genres))
const formattedMinutes = computed(() => formatMinutes(props.movie.runtime))
</script>

<template>
  <div :class="[`${props.classExt}__meta meta`]">
    <RatingBadge :movie="props.movie" class-ext="meta" />
    <span class="meta__year">{{ props.movie.releaseYear }}</span>
    <span class="meta__genre">{{ genresToRender }}</span>
    <span class="meta__duration">{{ formattedMinutes }}</span>
  </div>
</template>
