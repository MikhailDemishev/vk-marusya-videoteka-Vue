import { GENRE_CONFIG } from '@/shared/config/genresConfig'

export const translated1Genre = (genreApiName: string) => {
  return (
    GENRE_CONFIG.find((genreInDict) => genreInDict.originalName === genreApiName)?.translation ??
    genreApiName
  )
}
export const translatedGenreList = (genresToTranslate: string[]) => {
  const translated = genresToTranslate
    .map((genre) => GENRE_CONFIG.find((g) => g.originalName === genre)?.translation ?? genre)
    .slice(0, 2)

  if (translated.length === 0) return ''

  return translated.join(', ')
}

export const genreImg = (genreApiName: string) => {
  return GENRE_CONFIG.find((genreInDict) => genreInDict.originalName === genreApiName)?.image ?? ''
}
