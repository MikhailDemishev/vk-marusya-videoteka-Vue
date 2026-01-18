<script setup lang="ts">
import type { IMovieSearchCard } from '@/assets/types/type.dropdown'
import placeholderMovie from '@/assets/images/placeholders/clapperboard-placeholder.jpg'
import MetaBlock from '../UI/MetaBlock.vue'
defineProps<IMovieSearchCard>()
const emit = defineEmits<{
  (e: 'reset-search'): void
}>()
</script>
<template>
  <RouterLink
    v-if="movie"
    class="moviesearch-card"
    :to="{ name: 'movie', params: { id: movie.id } }"
    @click.stop.prevent="emit('reset-search')"
  >
    <div class="moviesearch-card-img__wrapper">
      <img
        class="moviesearch-card__img"
        :src="movie?.posterUrl ?? placeholderMovie"
        :alt="`Обложка фильма: ${movie.title}`"
      />
    </div>
    <div class="moviesearch-card__inner">
      <MetaBlock :movie="movie" class-ext="moviesearch-card" />
      <div class="moviesearch-card__title">{{ movie.title }}</div>
    </div>
  </RouterLink>
</template>
