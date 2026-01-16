<script setup lang="ts">
import MovieBanner from '@/components/Movie/MovieBanner.vue'
import MovieCard from '@/components/Movie/MovieCard.vue'
import { useRandomMovie } from '@/composables/movie/useRandomMovie'
import { useTopTenMovies } from '@/composables/movie/useTopTenMovies'
import Grid from '@/layout/Grid.vue'
import PageBoundary from '@/layout/PageBoundary.vue'
import PageLayout from '@/layout/PageLayout.vue'
import PageSection from '@/layout/PageSection.vue'

import { computed } from 'vue'

const randomMovieQuery = useRandomMovie()
const topTenQuery = useTopTenMovies()
const isLoading = computed(() => randomMovieQuery.isPending.value || topTenQuery.isPending.value)
const error = computed(() => randomMovieQuery.error.value || topTenQuery.error.value)
</script>

<template>
  <PageBoundary :is-loading="isLoading" :is-error="error">
    <PageLayout page-name="home">
      <MovieBanner
        :movie="randomMovieQuery.data.value ?? null"
        mode="home"
        @refetch="randomMovieQuery.refetch"
      />
      <PageSection title="Топ 10 фильмов" section-name="top" />
      <Grid :items="topTenQuery.data.value || []" class-ext="movie">
        <template #default="{ item, index }">
          <MovieCard
            :id="item.id"
            :index="index + 1"
            :title="item.title"
            :image-url="item.backdropUrl"
          />
        </template>
      </Grid>
    </PageLayout>
  </PageBoundary>
</template>
<style></style>
