import { computed, ref, watch } from 'vue'
import type { Movie } from '@/api/movies/movies.schemas'
import { useMoviesByGenre } from '../movie/useMoviesByGenre'
import type { GenreKey } from '@/assets/types/type.genre'

export const useGenrePagination = (genre: GenreKey) => {
  // === useState ===
  const page = ref(1)
  const movies = ref<Movie[]>([])

  const { data, isPending, error } = useMoviesByGenre(genre, page.value)

  const loadMore = () => {
    page.value += 1
  }

  const hasMore = computed(() => (data.value ? data.value.length >= 15 : false))

  watch(
    () => [data.value, page.value],
    () => {
      if (!data.value) return

      if (page.value === 1) {
        movies.value = data.value
      } else {
        movies.value = [...movies.value, ...data.value]
      }
    },
    { immediate: true },
  )

  watch(
    () => genre,
    () => {
      page.value = 1
    },
  )

  return {
    loadMore,
    page,
    movies,
    hasMore,
    error,
    isPending,
  }
}
