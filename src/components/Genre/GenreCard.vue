<script setup lang="ts">
import type { IGenreCard } from '@/assets/types/type.genre'

const props = defineProps<IGenreCard>()
</script>
<template>
  <RouterLink :to="props.to" class="genre-card">
    <img class="genre-card__img" :src="props.imgSource" :alt="`Жанр: ${props.genre}`" />
    <div class="genre-card__inner">
      <span class="genre-card__genre">{{ props.genre }}</span>
    </div>
  </RouterLink>
</template>
