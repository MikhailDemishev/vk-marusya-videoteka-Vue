<script setup lang="ts">
import MovieCard from '@/components/Movie/MovieCard.vue'
import Button from '@/components/UI/buttons/Button.vue'
import { useGenrePagination } from '@/composables/genres/useGenrePagination'
import Grid from '@/layout/Grid.vue'
import PageBoundary from '@/layout/PageBoundary.vue'
import PageLayout from '@/layout/PageLayout.vue'
import PageSection from '@/layout/PageSection.vue'
import { firstLetterTOUpperCase } from '@/utils/firstLetterTOUpperCase'
import { translated1Genre } from '@/utils/genreAddData'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const genre = computed(() => route.params.key as string)

const { visibleMovies, showLoadMore, loadMore, error, isPending } = useGenrePagination(genre.value)
const translatedTitle = computed(() => firstLetterTOUpperCase(translated1Genre(genre.value)))
</script>
<template>
  <PageBoundary :is-loading="isPending" :is-error="error">
    <PageLayout pageName="genre">
      <PageSection sectionName="genre" :title="translatedTitle">
        <Grid :items="visibleMovies" class-ext="movie">
          <template #default="{ item }">
            <MovieCard :id="item.id" :title="item.title" :image-url="item.posterUrl" />
          </template>
        </Grid>
        <Button
          v-if="showLoadMore"
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
