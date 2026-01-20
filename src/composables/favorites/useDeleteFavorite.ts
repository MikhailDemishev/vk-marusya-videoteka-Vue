import { deleteFavorite } from '@/api/favorites/favorites.api'
import { useMutation, useQueryClient } from '@tanstack/vue-query'

export function useDeleteFavorite() {
  const queryClient = useQueryClient()

  const favoritesMutation = useMutation({
    mutationFn: (id: number | string) => deleteFavorite(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        predicate: (query) => {
          const key = query.queryKey[0]
          return key === 'profile' || key === 'favorites'
        },
      })
    },

    onError: (error: unknown) => {
      if (error instanceof Error) {
        console.error(error.message)
      }
    },
  })

  return favoritesMutation
}
