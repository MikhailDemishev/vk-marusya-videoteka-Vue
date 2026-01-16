import { getMoviesByTitle } from '@/api/movies/movies.api'
import { useQuery } from '@tanstack/vue-query'

export function useMoviesByTitle(title: string, count: number = 5) {
  return useQuery({
    queryKey: ['moviesByTitle', title, count],
    queryFn: () => getMoviesByTitle(title, count),
    retry: false,
    placeholderData: (prev) => prev,
  })
}
