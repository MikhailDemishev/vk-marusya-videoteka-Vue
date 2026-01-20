<script setup lang="ts">
import GenreCard from '@/components/Genre/GenreCard.vue'
import { useGenres } from '@/composables/genres/useGenres'
import Grid from '@/layout/Grid.vue'
import PageBoundary from '@/layout/PageBoundary.vue'
import PageLayout from '@/layout/PageLayout.vue'
import PageSection from '@/layout/PageSection.vue'
import { firstLetterTOUpperCase } from '@/utils/firstLetterTOUpperCase'
import { translated1Genre, genreImg } from '@/utils/genreAddData'
import { computed } from 'vue'

const genresQuery = useGenres()
const isLoading = computed(() => genresQuery.isPending.value)
const error = computed(() => genresQuery.error.value)
const genres = computed(() => genresQuery.data.value ?? [])

console.log(genresQuery.data.value)
</script>

<template>
  <PageBoundary :is-loading="isLoading" :is-error="error">
    <PageLayout pageName="genres">
      <PageSection sectionName="genres" title="Жанры фильмов">
        <Grid :items="genres" class-ext="genres">
          <template #default="{ item }">
            <GenreCard
              :genre="firstLetterTOUpperCase(translated1Genre(item))"
              :to="`/genres/${item}`"
              :imgSource="genreImg(item)"
            />
          </template>
        </Grid>
      </PageSection>
    </PageLayout>
  </PageBoundary>
</template>
