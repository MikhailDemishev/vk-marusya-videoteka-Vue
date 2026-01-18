import { postFavorite } from '@/api/favorites/favorites.api'
import { useMutation, useQueryClient } from '@tanstack/vue-query'

export function usePostFavorite() {
  const queryClient = useQueryClient()

  const favoritesMutation = useMutation({
    mutationFn: (id: number | string) => postFavorite(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
    },

    onError: (error: unknown) => {
      if (error instanceof Error) {
        console.error(error.message)
      }
    },
  })

  return favoritesMutation
}
