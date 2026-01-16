<script setup lang="ts">
import type { CustomInputProps } from '../../assets/types/types.input'
withDefaults(defineProps<CustomInputProps>(), {
  variant: 'other',
  isError: false,
  resetField: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'iconClick'): void
  (e: 'reset'): void
  (e: 'focus'): void
  (e: 'blur'): void
}>()
</script>

<template>
  <div
    :class="[
      'custom-input',
      variant && `custom-input--${variant}`,
      isError && 'custom-input--error',
    ]"
  >
    <svg v-if="iconId" class="custom-input__icon" aria-hidden="true" @click="emit('iconClick')">
      <use :href="`/sprite.svg#${iconId}`" />
    </svg>
    <input
      :type="type"
      class="custom-input__field"
      :value="modelValue"
      :placeholder="placeholder"
      @focus="emit('focus')"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @blur="emit('blur')"
    />
    <button v-if="resetField" type="button" class="custom-input__reset" @click="emit('reset')">
      <svg class="custom-input__icon custom-input__icon--reset" aria-hidden="true">
        <use href="/sprite.svg#icon-close" />
      </svg>
    </button>
  </div>
</template>
