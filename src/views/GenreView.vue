<script setup lang="ts">
import type { GenreKey } from '@/assets/types/type.genre'
import MovieCard from '@/components/Movie/MovieCard.vue'
import Button from '@/components/UI/buttons/Button.vue'
import { useGenrePagination } from '@/composables/genres/useGenrePagination'
import Grid from '@/layout/Grid.vue'
import PageBoundary from '@/layout/PageBoundary.vue'
import PageLayout from '@/layout/PageLayout.vue'
import PageSection from '@/layout/PageSection.vue'
import { firstLetterTOUpperCase } from '@/utils/firstLetterTOUpperCase'
import { translate1Genre } from '@/utils/translateGenres'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const genre = route.params.key as GenreKey
const { movies, loadMore, hasMore, error, isPending } = useGenrePagination(genre)
const translatedTitle = computed(() => firstLetterTOUpperCase(translate1Genre(genre)))
</script>
<template>
  <PageBoundary :is-loading="isPending" :is-error="error">
    <PageLayout pageName="genre">
      <PageSection sectionName="genre" :title="translatedTitle">
        <Grid :items="movies" class-ext="movie">
          <template #default="{ item }">
            <MovieCard :id="item.id" :title="item.title" :image-url="item.posterUrl" />
          </template>
        </Grid>
        <Button
          v-if="hasMore"
          size="m"
          variant="secondary"
          class="genre-section__btn"
          @click="loadMore"
          >Показать еще</Button
        >
      </PageSection>
    </PageLayout>
  </PageBoundary>
</template>
