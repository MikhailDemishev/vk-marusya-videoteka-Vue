import { ref } from 'vue'

export const useShowSearchResults = () => {
  const searchQuery = ref('')

  const handleInput = (inputValue: string) => {
    searchQuery.value = inputValue.trim()
    if (inputValue.trim().length < 1) {
      console.log('закроем дроп')
    } else {
      console.log('откроем дроп')
      console.log('searchquery', searchQuery.value)
    }
  }

  const resetSearch = () => {
    searchQuery.value = ''
    //а потом закроем дроп
  }

  return {
    searchQuery,
    handleInput,
    resetSearch,
  }
}
