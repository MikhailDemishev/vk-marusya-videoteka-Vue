import { useModalStore } from '@/stores/modal.store'
import { useTrailerDataStore } from '@/stores/trailer.store'
import type { IMovieTrailer } from '@/assets/types/type.movie'

export const useTrailerModal = () => {
  const { setTrailerData } = useTrailerDataStore()
  const { openModal } = useModalStore()

  const handleTrailerOpen = (trailer: IMovieTrailer) => {
    setTrailerData(trailer)
    openModal('trailer')
  }
  return { handleTrailerOpen }
}
