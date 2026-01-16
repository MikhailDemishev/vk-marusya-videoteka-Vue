import { getMovieById } from '@/api/movies/movies.api'
import { useQuery } from '@tanstack/vue-query'

export function useMovieById(id: number | string) {
  return useQuery({
    queryFn: () => getMovieById(id),
    queryKey: ['movie', id],
    enabled: !!id,
    retry: false,
  })
}
