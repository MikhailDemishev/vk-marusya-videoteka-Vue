import { useAuthModalStatusStore } from '@/stores/auth.store'
import { useModalStore } from '@/stores/modal.store'
//import { storeToRefs } from 'pinia'
import { useLogout } from './useLogout'

export const useAuthModal = () => {
  const modalStore = useModalStore()
  //const { modalIsOpen, typeOfModal } = storeToRefs(modalStore)
  const { openModal } = modalStore

  const authTypeStore = useAuthModalStatusStore()
  const { setAuthFormStatus } = authTypeStore
  const logout = useLogout()
  //запуск формы логина
  const handleLoginFormOpen = () => {
    openModal('auth')
    setAuthFormStatus('login')
    console.log('test')
  }

  //логаут вызов и обработка
  const handleLogOut = () => logout.mutate()
  return { handleLoginFormOpen, handleLogOut }

  //регистрация
}
