import { ref, computed, watch } from 'vue'
import { genresList } from '@/utils/genresList'
import type { GenreObject } from '@/assets/types/type.genre'
export function useGenreListPagination() {
  const page = ref(1)
  const items = ref<GenreObject[]>([])
  const pageSize = 8

  const loadChunk = () => {
    const start = (page.value - 1) * pageSize
    const end = start + pageSize
    const chunk = genresList.slice(start, end)

    if (page.value === 1) {
      items.value = chunk
    } else {
      items.value = [...items.value, ...chunk]
    }
  }

  watch(page, loadChunk, { immediate: true })

  const hasMore = computed(() => items.value.length < genresList.length)

  const loadMore = () => {
    page.value += 1
  }

  return {
    items,
    hasMore,
    loadMore,
  }
}
