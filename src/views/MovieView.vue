<script setup lang="ts">
import MovieBanner from '@/components/Movie/MovieBanner.vue'
import MovieInfo from '@/components/Movie/MovieInfo.vue'
import { useMovieById } from '@/composables/movie/useMovieById'
import PageBoundary from '@/layout/PageBoundary.vue'
import PageLayout from '@/layout/PageLayout.vue'
import PageSection from '@/layout/PageSection.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const movieId = computed(() => route.params.id as string)

const movieByIdQuery = useMovieById(movieId.value)
</script>

<template>
  <PageBoundary :is-loading="movieByIdQuery.isPending.value" :is-error="movieByIdQuery.error.value">
    <PageLayout pageName="movie">
      <MovieBanner
        v-if="movieByIdQuery.data.value"
        :movie="movieByIdQuery.data.value"
        mode="details"
      />
      <PageSection title="О фильме" sectionName="movie-info">
        <MovieInfo v-if="movieByIdQuery.data.value" :movie="movieByIdQuery.data.value" />
      </PageSection>
    </PageLayout>
  </PageBoundary>
</template>
