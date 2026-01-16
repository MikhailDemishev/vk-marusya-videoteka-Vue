<script setup lang="ts">
import { useShowSearchResults } from '@/composables/layout/useShowSearchResults'
import Input from '../UI/Input.vue'
defineProps<{
  isError?: boolean
}>()

const emit = defineEmits<{
  (e: 'resetMobile'): void
}>()

const { handleInput, resetSearch, searchQuery } = useShowSearchResults()
</script>
<template>
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
  ></Input>
</template>
