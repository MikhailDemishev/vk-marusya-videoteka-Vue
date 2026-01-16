<script setup lang="ts">
defineProps<{
  title: string
  sectionName: string
}>()
</script>

<template>
  <section :class="['page-section', `${sectionName}-section`]">
    <span v-if="sectionName === 'genre'" :class="[`${sectionName}-section__header`]">
      <router-link :class="[`${sectionName}-section__backlink`]" to="/genres">
        <svg :class="[`${sectionName}-section__backlink-logo`]" aria-hidden="true">
          <use href="/sprite.svg#icon-arrow" />
        </svg>
      </router-link>
      <h2 :class="[`${sectionName}-section__title`]">{{ title }}</h2>
    </span>
    <h2 v-else :class="[`${sectionName}-section__title`]">{{ title }}</h2>
    <div v-if="$slots.header" :class="[`${sectionName}-section__header`]">
      <slot name="header" />
    </div>

    <div :class="[`${sectionName}-section__content`]">
      <slot />
    </div>
  </section>
</template>
