import { getRandomMovie } from '@/api/movies/movies.api'
import { useQuery } from '@tanstack/vue-query'

export function useRandomMovie() {
  return useQuery({
    queryFn: getRandomMovie,
    queryKey: ['movie', 'random'],
    retry: false,
  })
}
