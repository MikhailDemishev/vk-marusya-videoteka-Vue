import { loginUser } from '@/api/auth/login/login.api'
import type { LoginType } from '@/api/auth/login/login.schemas'
import { useModalStore } from '@/stores/modal.store'
import { useMutation, useQueryClient } from '@tanstack/vue-query'

export function useLogin() {
  const modalStore = useModalStore()
  const { closeModal } = modalStore
  const queryClient = useQueryClient()

  const loginMutation = useMutation({
    mutationFn: (data: LoginType) => loginUser(data),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] })
      closeModal()
    },
  })

  return loginMutation
}
