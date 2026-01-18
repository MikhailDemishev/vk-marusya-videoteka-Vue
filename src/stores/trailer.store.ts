import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IMovieTrailer } from '@/assets/types/type.movie'

export const useTrailerDataStore = defineStore('trailer', () => {
  const movieTrailerData = ref<IMovieTrailer>({
    trailerUrl: null,
    trailerDesc: null,
  })

  function setTrailerData(trailer: IMovieTrailer) {
    movieTrailerData.value = { trailerUrl: trailer.trailerUrl, trailerDesc: trailer.trailerDesc }
  }

  return {
    movieTrailerData,
    setTrailerData,
  }
})
