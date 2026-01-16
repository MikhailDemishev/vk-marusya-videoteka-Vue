import { useQuery } from '@tanstack/vue-query'
import { getUserProfile } from '@/api/auth/profile/profile.api'

export function useUserProfile() {
  return useQuery({
    queryKey: ['profile'],
    queryFn: getUserProfile,
    retry: false,
  })
}
