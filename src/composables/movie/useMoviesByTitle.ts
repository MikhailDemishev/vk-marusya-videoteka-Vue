import { getMoviesByTitle } from '@/api/movies/movies.api'
import { useQuery } from '@tanstack/vue-query'
import { computed, type Ref } from 'vue'

export function useMoviesByTitle(title: Ref<string>, count: number = 5) {
  const enabled = computed(() => title.value.length > 0)

  return useQuery({
    queryKey: ['moviesByTitle', title, count],
    queryFn: () => getMoviesByTitle(title.value, count),
    enabled,
    retry: false,
    placeholderData: (prev) => prev,
  })
}
