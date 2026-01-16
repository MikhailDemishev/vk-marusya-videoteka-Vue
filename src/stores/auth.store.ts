import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { AuthType } from '@/assets/types/type.auth'

export const useAuthModalStatusStore = defineStore('authModalStatus', () => {
  const authFormStatus = ref<AuthType>('login')

  function setAuthFormStatus(value: AuthType) {
    authFormStatus.value = value
  }

  return {
    authFormStatus,

    setAuthFormStatus,
  }
})
