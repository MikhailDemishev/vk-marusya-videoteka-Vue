import type { Movie } from '@/api/movies/movies.schemas'

export interface IMovieCard {
  id: number
  index?: number
  title?: string
  imageUrl?: string | null
  showCloseButton?: boolean
}

export interface IMovieTrailer {
  trailerUrl: string | null | undefined
  trailerDesc: string | null | undefined
}

export interface IMovieInfo {
  movie: Movie | null
}

export interface IMovieInfoItem {
  labelName: string
  value: string
}

export interface IMovieBanner {
  movie: Movie | null
  mode: 'home' | 'details'
}
