import type { GENRE_CONFIG } from '@/shared/config/genresConfig'
export type GenreKey = keyof typeof GENRE_CONFIG

export type GenreObject = {
  key: GenreKey
  name: string
  image: string
}

export interface IGenreCard {
  genre: string
  to: string
  imgSource?: string
}
