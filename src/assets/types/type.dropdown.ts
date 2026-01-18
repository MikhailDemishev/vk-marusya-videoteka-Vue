import type { Movie } from '@/api/movies/movies.schemas'

export interface IDropdownWindow {
  isOpen: boolean
  classExt: string
}

export interface IMovieSearchCard {
  movie: Movie | null
}
