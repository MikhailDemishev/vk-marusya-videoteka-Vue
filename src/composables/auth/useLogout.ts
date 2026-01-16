import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { logoutUser } from '@/api/auth/logout/logout.api'

export function useLogout() {
  const queryClient = useQueryClient()

  const logoutMutation = useMutation({
    mutationFn: logoutUser,

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
      queryClient.resetQueries({ queryKey: ['profile'] })
    },

    onError: (error: unknown) => {
      if (error instanceof Error) {
        console.error(error.message)
      }
    },
  })

  return logoutMutation
}
