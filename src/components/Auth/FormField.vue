<script setup lang="ts">
defineProps<{
  label?: string
  errorMessage?: string
  className?: string
}>()
</script>

<template>
  <label class="form-field" :class="className">
    <slot />

    <span v-if="errorMessage" class="form-field__error-text">
      {{ errorMessage }}
    </span>
  </label>
</template>
