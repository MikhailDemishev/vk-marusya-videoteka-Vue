import { useAuthModal } from '../auth/useAuthModal'
import { useUserProfile } from '../auth/useProfile'
import { useDeleteFavorite } from './useDeleteFavorite'
import { usePostFavorite } from './usePostFavorite'

export const useAddToFavorites = () => {
  const { handleLoginFormOpen } = useAuthModal()
  const { data: profile } = useUserProfile()
  const postFavorite = usePostFavorite()
  const deleteFavorite = useDeleteFavorite()

  const filmInFavorites = (id: number | string) => {
    return profile.value?.favorites?.includes(String(id)) ?? false
  }

  const handleAddToFavorites = (id: number | string) => {
    if (!profile.value) {
      handleLoginFormOpen()
      return
    }

    if (!id) {
      console.error('id is missing!')
      return
    }

    //Удаляем при повторном нажатии
    if (filmInFavorites(id)) {
      console.log(id)
      deleteFavorite.mutate(id)
    }

    postFavorite.mutate(id)
  }

  return { handleAddToFavorites, filmInFavorites }
}
