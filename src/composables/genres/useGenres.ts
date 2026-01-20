import { getMovieGenres } from '@/api/movies/movies.api'
import { useQuery } from '@tanstack/vue-query'

export function useGenres() {
  return useQuery({
    queryFn: getMovieGenres,
    queryKey: ['movie', 'genres'],
    retry: false,
  })
}
