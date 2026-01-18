import { getMoviesByTitle } from '@/api/movies/movies.api'
import { useQuery } from '@tanstack/vue-query'
import type { Ref } from 'vue'

export function useMoviesByTitle(title: Ref<string>, count: number = 5) {
  return useQuery({
    queryKey: ['moviesByTitle', title, count],
    queryFn: () => getMoviesByTitle(title.value, count),
    retry: false,
    placeholderData: (prev) => prev,
  })
}
