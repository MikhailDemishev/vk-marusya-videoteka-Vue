import { computed, ref, watch } from 'vue'
import type { Movie } from '@/api/movies/movies.schemas'
import { useMoviesByGenre } from '../movie/useMoviesByGenre'

export const useGenrePagination = (genre: string) => {
  const serverPage = ref(1)
  const visibleCount = ref(10)
  const cache = ref<Movie[]>([])

  const { data, isPending, error } = useMoviesByGenre(genre, serverPage, 50)

  const visibleMovies = computed(() => cache.value.slice(0, visibleCount.value))

  const hasHidden = computed(() => visibleCount.value < cache.value.length)
  const hasMoreFromServer = ref(true)

  const loadMore = () => {
    if (visibleCount.value + 10 <= cache.value.length) {
      visibleCount.value += 10
      return
    }

    serverPage.value += 1
  }

  watch(data, (newData) => {
    if (!newData) return

    cache.value.push(...newData)

    if (newData.length < 50) {
      hasMoreFromServer.value = false
    }
  })
  watch(
    () => genre,
    () => {
      serverPage.value = 1
      visibleCount.value = 10
      cache.value = []
      hasMoreFromServer.value = true
    },
  )

  const showLoadMore = computed(() => hasHidden.value || hasMoreFromServer.value)
  return {
    loadMore,
    showLoadMore,
    serverPage,
    visibleMovies,
    error,
    isPending,
  }
}
