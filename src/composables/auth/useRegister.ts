import { registerUser } from '@/api/auth/register/register.api'
import type { RegisterResponse, ValidateRegForm } from '@/api/auth/register/register.schemas'
import { useAuthModalStatusStore } from '@/stores/auth.store'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
export function useRegister() {
  const modalAuthStatustore = useAuthModalStatusStore()
  const { setAuthFormStatus } = modalAuthStatustore
  const queryClient = useQueryClient()

  return useMutation<RegisterResponse, Error, ValidateRegForm>({
    mutationFn: (data) => {
      return registerUser(data)
    },

    onSuccess: (data) => {
      console.log('successful signUp', data)
      setAuthFormStatus('success')
      queryClient.invalidateQueries({ queryKey: ['user'] })
    },

    onError: (error: unknown) => {
      console.error('error', error)
    },
  })
}
