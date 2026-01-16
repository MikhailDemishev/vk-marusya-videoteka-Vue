import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { ModalType } from '@/assets/types/type.modal'

export const useModalStore = defineStore('modal', () => {
  const modalIsOpen = ref(false)
  const typeOfModal = ref<ModalType>(null)

  function openModal(modalType: ModalType) {
    modalIsOpen.value = true
    typeOfModal.value = modalType
  }

  function closeModal() {
    modalIsOpen.value = false
    typeOfModal.value = null
  }

  return {
    modalIsOpen,
    typeOfModal,
    openModal,
    closeModal,
  }
})
