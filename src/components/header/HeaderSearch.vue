<script setup lang="ts">
import Input from '../UI/Input.vue'
import DropDownWindow from '../Dropdown/DropDownWindow.vue'
import DropDownList from '../Dropdown/DropDownList.vue'
import MovieSearchCard from '../Dropdown/MovieSearchCard.vue'
import { useDropDownStore } from '@/stores/dropdown.store'
import { useShowSearchResults } from '@/composables/movie/useShowSearchResults'
import { storeToRefs } from 'pinia'

const dropdownStore = useDropDownStore()
const { isOpen } = storeToRefs(dropdownStore)

defineProps<{
  isError?: boolean
}>()

const emit = defineEmits<{
  (e: 'resetMobile'): void
}>()

const { handleInput, foundMovies, resetSearch, searchQuery } = useShowSearchResults()
</script>
<template>
  <div class="header__search header-search">
    <Input
      type="text"
      variant="search"
      icon-id="icon-search"
      @update:modelValue="handleInput"
      @reset="resetSearch()"
      @icon-click="emit('resetMobile')"
      :reset-field="true"
      :model-value="searchQuery"
      :is-error="isError"
    />
    <DropDownWindow class-ext="header-search" :is-open="isOpen">
      <DropDownList :items="foundMovies ?? []">
        <template #default="{ item }">
          <MovieSearchCard :movie="item" @click="resetSearch" />
        </template>
      </DropDownList>
    </DropDownWindow>
  </div>
</template>
