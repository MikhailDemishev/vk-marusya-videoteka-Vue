import { useAuthModal } from '../auth/useAuthModal'
import { useUserProfile } from '../auth/useProfile'
import { usePostFavorite } from './usePostFavorite'

export const useAddToFavorites = () => {
  const { handleLoginFormOpen } = useAuthModal()
  const { data: profile } = useUserProfile()
  const postFavorite = usePostFavorite()

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

    if (filmInFavorites(id)) {
      alert('Фильм добавлен ранее!')
      return
    }
    postFavorite.mutate(id)
  }

  return { handleAddToFavorites, filmInFavorites }
}
