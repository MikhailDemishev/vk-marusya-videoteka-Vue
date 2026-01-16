import { getMoviesByGenre } from '@/api/movies/movies.api'
import type { GenreKey } from '@/assets/types/type.genre'
import { useQuery } from '@tanstack/vue-query'

export function useMoviesByGenre(genre: GenreKey, page: number = 1, count: number = 15) {
  return useQuery({
    queryKey: ['moviesByGenre', genre, page, count],
    queryFn: () => getMoviesByGenre(genre, page, count),
    retry: false,
  })
}
