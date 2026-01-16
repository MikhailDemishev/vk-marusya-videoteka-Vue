export type ModalType = 'auth' | 'trailer' | null

export interface IModalState {
  modalIsOpen: boolean
  typeOfModal: ModalType
}
