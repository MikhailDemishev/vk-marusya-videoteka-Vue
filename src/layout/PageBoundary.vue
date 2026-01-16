<script setup lang="ts">
import Button from '@/components/UI/buttons/Button.vue'
import Loader from '@/components/UI/Loader.vue'
import { useQueryClient } from '@tanstack/vue-query'

defineProps<{
  isLoading?: boolean
  isError?: Error | null
}>()
const queryClient = useQueryClient()
const reloadPage = () => queryClient.invalidateQueries()
</script>
<template>
  <Loader v-if="isLoading" />
  <div v-else-if="isError" class="page-notfound">
    <span class="page-notfound__warning">Страница недоступна</span>
    <span class="page-notfound__text"
      >Пожалуйста, нажмите на кнопку ниже, чтобы перезагрузить страницу</span
    >
    <Button class="page-notfound__reload" size="m" variant="secondary" @click="reloadPage"
      >перезагрузить страницу</Button
    >
  </div>
  <slot v-else />
</template>
