import { getMoviesByGenre } from '@/api/movies/movies.api'
import { useQuery } from '@tanstack/vue-query'
import type { Ref } from 'vue'

export function useMoviesByGenre(genre: string, page: Ref<number>, count = 50) {
  return useQuery({
    queryKey: ['moviesByGenre', genre, page],
    queryFn: () => getMoviesByGenre(genre, page.value, count),
    retry: false,
  })
}
