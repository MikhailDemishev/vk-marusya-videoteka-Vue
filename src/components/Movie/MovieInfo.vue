<script setup lang="ts">
import type { IMovieInfo, IMovieInfoItem } from '@/assets/types/type.movie'
import { LANGUAGE_CONFIG } from '@/shared/config/languagesConfig'
import { firstLetterTOUpperCase } from '@/utils/firstLetterTOUpperCase'
import { computed } from 'vue'

const props = defineProps<IMovieInfo>()

const infoConfig = computed<IMovieInfoItem[]>(() => [
  {
    labelName: 'Язык оригинала',
    value:
      firstLetterTOUpperCase(
        LANGUAGE_CONFIG[props.movie?.language as keyof typeof LANGUAGE_CONFIG]?.name,
      ) ?? 'Язык неизвестен',
  },
  { labelName: 'Бюджет', value: props.movie?.budget ?? 'Бюджет неизвестнен' },
  { labelName: 'Выручка', value: props.movie?.revenue ?? 'Нет данных о выручке' },
  { labelName: 'Режиссёр', value: props.movie?.director ?? 'Неизвестный режиссер' },
  {
    labelName: 'Продакшен',
    value: props.movie?.production ?? 'Нет информции о продакшне',
  },
  {
    labelName: 'Награды',
    value: props.movie?.awardsSummary ?? 'Нет информации о наградах',
  },
])
</script>
<template>
  <div class="movie-info">
    <div v-for="item in infoConfig" :key="item.value" class="movie-info__row">
      <span class="movie-info__label">
        <span class="movie-info__label-name">{{ item.labelName }}</span>
        <span class="movie-info__label-line"></span>
      </span>
      <span class="movie-info__value">{{ item.value }}</span>
    </div>
  </div>
</template>
