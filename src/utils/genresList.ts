import type { GenreKey, GenreObject } from '@/assets/types/type.genre'
import { GENRE_CONFIG } from '@/shared/config/genresConfig'

export const genresList: GenreObject[] = Object.entries(GENRE_CONFIG).map(([key, value]) => ({
  key: key as GenreKey,
  name: value.name,
  image: value.image,
}))
