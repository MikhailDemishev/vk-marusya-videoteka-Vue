import { deleteFavorite } from '@/api/favorites/favorites.api'
import { useMutation, useQueryClient } from '@tanstack/vue-query'

export function useDeleteFavorite() {
  const queryClient = useQueryClient()

  const favoritesMutation = useMutation({
    mutationFn: (id: number | string) => deleteFavorite(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['favorites'] })
    },

    onError: (error: unknown) => {
      if (error instanceof Error) {
        console.error(error.message)
      }
    },
  })

  return favoritesMutation
}
