<script setup lang="ts">
import type { IMovieBanner } from '@/assets/types/type.movie'
import MetaBlock from '../UI/MetaBlock.vue'
import Button from '../UI/buttons/Button.vue'
import placeholderMovie from '@/assets/images/placeholders/clapperboard-placeholder.jpg'
import { useAddToFavorites } from '@/composables/favorites/useAddToFavorites'
import { computed } from 'vue'
import { useTrailerModal } from '@/composables/movie/useTrailerModal'

const props = defineProps<IMovieBanner>()
const emit = defineEmits<{
  (e: 'refetch'): void
}>()
const { handleAddToFavorites, filmInFavorites } = useAddToFavorites()
const { handleTrailerOpen } = useTrailerModal()
const addedToFavorites = computed(() => filmInFavorites(props.movie!.id))
</script>
<template>
  <div v-if="props.movie" class="movie-banner">
    <div class="movie-banner__content">
      <div class="movie-banner__inner">
        <div class="movie-banner__about">
          <MetaBlock :movie="props.movie" class-ext="movie-banner" />
          <h2 class="movie-banner__title">{{ props.movie.title }}</h2>
          <p class="movie-banner__description">{{ props.movie.plot }}</p>
        </div>
        <div class="movie-banner__actions">
          <!--не забыть добавить действие для открытия трейлера-->
          <Button
            class="movie-banner__button"
            variant="primary"
            size="m"
            @click="
              handleTrailerOpen({
                trailerUrl: props.movie.trailerUrl,
                trailerDesc: props.movie.plot,
              })
            "
            >Трейлер</Button
          >
          <RouterLink
            v-if="mode === 'home'"
            class="btn btn--primary btn--m movie-banner__button"
            :to="{ name: 'movie', params: { id: props.movie.id } }"
            >О фильме</RouterLink
          >
          <Button
            :class="['movie-banner__button', { 'movie-banner__button--active': addedToFavorites }]"
            variant="primary"
            size="s"
            @click="handleAddToFavorites(props.movie.id)"
          >
            <svg class="movie-banner__logo-image" width="20" height="19" aria-hidden="true">
              <use v-if="addedToFavorites" href="/sprite.svg#heart-filled" />
              <use v-else href="/sprite.svg#heart-empty" />
            </svg>
          </Button>
          <Button
            v-if="props.mode === 'home'"
            class="movie-banner__button"
            variant="primary"
            size="s"
            @click="emit('refetch')"
          >
            <svg class="movie-banner__logo-image" width="20" height="20" aria-hidden="true">
              <use href="/sprite.svg#refresh" />
            </svg>
          </Button>
        </div>
      </div>
      <img
        class="movie-banner__image"
        :src="props.movie.posterUrl ?? placeholderMovie"
        width="680"
        height="552"
        :alt="props.movie.title"
      />
    </div>
  </div>
</template>
