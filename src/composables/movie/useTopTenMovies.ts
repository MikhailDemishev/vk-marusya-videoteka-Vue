import { get10Movies } from '@/api/movies/movies.api'
import { useQuery } from '@tanstack/vue-query'

export function useTopTenMovies() {
  return useQuery({
    queryFn: () => get10Movies(),
    queryKey: ['movie', 'top10'],
    retry: false,
  })
}
