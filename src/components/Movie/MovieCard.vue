<script setup lang="ts">
import type { IMovieCard } from '@/assets/types/type.movie'
import Button from '../UI/buttons/Button.vue'
import placeholderMovie from '@/assets/images/placeholders/clapperboard-placeholder.jpg'
const props = defineProps<IMovieCard>()
const emit = defineEmits<{
  (e: 'close-card', id: number): void
}>()
</script>
<template>
  <RouterLink :to="{ name: 'movie', params: { id: props.id } }" class="movie-card">
    <img
      :src="props.imageUrl ?? placeholderMovie"
      :alt="props.title ? `Обложка фильма ${props.title}` : 'Обложка фильма'"
      class="movie-card__img"
    />
    <span v-if="props.index !== undefined" class="movie-card__counter">{{ props.index }}</span>
    <Button
      v-if="props.showCloseButton"
      variant="close"
      @click.stop.prevent="emit('close-card', props.id)"
    />
  </RouterLink>
</template>
