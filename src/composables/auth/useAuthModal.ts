import { useAuthModalStatusStore } from '@/stores/auth.store'
import { useModalStore } from '@/stores/modal.store'
//import { storeToRefs } from 'pinia'
import { useLogout } from './useLogout'
import { useRouter } from 'vue-router'

export const useAuthModal = () => {
  const modalStore = useModalStore()
  const router = useRouter()
  const { openModal } = modalStore

  const authTypeStore = useAuthModalStatusStore()
  const { setAuthFormStatus } = authTypeStore
  const logout = useLogout()
  //запуск формы логина
  const handleLoginFormOpen = () => {
    openModal('auth')
    setAuthFormStatus('login')
  }

  //логаут вызов и обработка
  const handleLogOut = async () => {
    logout.mutate()
    await router.push({ name: 'home' })
  }
  return { handleLoginFormOpen, handleLogOut }
}
