<script setup lang="ts">
import type { IMovieBanner } from '@/assets/types/type.movie'
import MetaBlock from '../UI/MetaBlock.vue'
import Button from '../UI/buttons/Button.vue'
import placeholderMovie from '@/assets/images/placeholders/clapperboard-placeholder.jpg'

const props = defineProps<IMovieBanner>()
  const emit = defineEmits<{
  (e: 'refetch'): void
}>()

//favorites будет позже
</script>
<template>
  <div v-if="props.movie" class="movie-banner">
    <div class="movie-banner__content">
      <div class="movie-banner__inner">
        <div class="movie-banner__about">
          <MetaBlock v-if="props.movie" :movie="props.movie" class-ext="movie-banner" />
          <h2 class="movie-banner__title">{{ props.movie.title }}</h2>
          <p class="movie-banner__description">{{ props.movie.plot }}</p>
        </div>
        <div class="movie-banner__actions">
          <!--не забыть добавить действие для открытия трейлера-->
          <Button class="movie-banner__button" variant="primary" size="m">Трейлер</Button>
          <RouterLink
            class="btn btn--primary btn--m movie-banner__button"
            :to="{ name: 'movie', params: { id: props.movie.id } }"
            >О фильме</RouterLink
          >
          <!--не забыть отражение добавленных в избранное на кнопке-->
          <Button class="movie-banner__button" variant="primary" size="s">
            <!--также svg поменять с условием-->
            <svg class="movie-banner__logo-image" width="20" height="19" aria-hidden="true">
              <use href="/sprite.svg#heart-filled" />
            </svg>
          </Button>
          <!--добавить refetch-->
          <Button v-if="props.mode === 'home'" class="movie-banner__button" variant="primary" size="s"@click="emit('refetch')"
">
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
