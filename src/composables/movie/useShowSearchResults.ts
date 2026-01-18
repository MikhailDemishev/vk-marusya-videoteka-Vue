import { ref, watch } from 'vue'
import { useDropDownStore } from '@/stores/dropdown.store'
import { useMoviesByTitle } from './useMoviesByTitle'

export const useShowSearchResults = () => {
  const { openDropDown, closeDropDown } = useDropDownStore()

  const searchQuery = ref('')
  const { data: foundMovies } = useMoviesByTitle(searchQuery)

  const handleInput = (inputValue: string) => {
    searchQuery.value = inputValue
  }

  watch([searchQuery, foundMovies], () => {
    const query = searchQuery.value
    const movies = foundMovies.value

    if (!query || query.length < 1) {
      closeDropDown()
      return
    }
    if (!Array.isArray(movies)) {
      return
    }
    if (movies.length === 0) {
      closeDropDown()
      return
    }
    openDropDown()
  })

  const resetSearch = () => {
    searchQuery.value = ''
    closeDropDown()
  }

  return {
    handleInput,
    foundMovies,
    resetSearch,
    searchQuery,
  }
}
