import { getFavorites } from '@/api/favorites/favorites.api'
import { useQuery } from '@tanstack/vue-query'

export function useGetFavorites() {
  return useQuery({
    queryFn: () => getFavorites(),
    queryKey: ['favorites'],
    retry: false,
  })
}
