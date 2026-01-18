<script setup lang="ts">
import GenreCard from '@/components/Genre/GenreCard.vue'
import Button from '@/components/UI/buttons/Button.vue'
import { useGenreListPagination } from '@/composables/genres/useGenreListPagination'
import Grid from '@/layout/Grid.vue'
import PageLayout from '@/layout/PageLayout.vue'
import PageSection from '@/layout/PageSection.vue'
const { loadMore, hasMore, items } = useGenreListPagination()
</script>

<template>
  <PageLayout pageName="genres">
    <PageSection sectionName="genres" title="Жанры фильмов">
      <Grid :items="items" class-ext="genres">
        <template #default="{ item }">
          <GenreCard :genre="item.name" :to="`/genres/${item.key}`" :imgSource="item.image" />
        </template>
      </Grid>
      <Button
        v-if="hasMore"
        size="m"
        variant="secondary"
        class="genres-section__btn"
        @click="loadMore"
        >Показать еще</Button
      >
    </PageSection>
  </PageLayout>
</template>
