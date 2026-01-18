<script setup lang="ts">
import { useTrailerDataStore } from '@/stores/trailer.store'
import { computed } from 'vue'

const { movieTrailerData } = useTrailerDataStore()
const youtubeId = computed(() => {
  if (!movieTrailerData.trailerUrl) return undefined
  return movieTrailerData.trailerUrl.split('v=')[1]
})

const embedUrl = computed(() => {
  if (!youtubeId.value) return undefined

  return `https://www.youtube.com/embed/${youtubeId.value}?controls=1&modestbranding=1&rel=0&iv_load_policy=3&autohide=1&fs=1&playsinline=1`
})
</script>
<template>
  <div v-if="movieTrailerData.trailerUrl" class="movie-trailer">
    <iframe
      class="movie-trailer__iframe"
      :src="embedUrl"
      allow="
        accelerometer;
        autoplay;
        clipboard-write;
        encrypted-media;
        gyroscope;
        picture-in-picture;
      "
      allowFullScreen
    />
    <div class="movie-trailer__bottom">{{ movieTrailerData.trailerDesc }}</div>
  </div>
  <p v-else class="movie-trailer__warning">Для этого фильма трейлер недоступен</p>
</template>
