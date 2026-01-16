<script setup lang="ts">
type ButtonVariant = 'primary' | 'secondary' | 'menu' | 'link' | 'other' | 'close'
type ButtonSize = 'l' | 'm' | 's'
type ButtonType = 'submit' | 'reset' | 'button'

withDefaults(
  defineProps<{
    isDisabled?: boolean
    type?: ButtonType
    variant?: ButtonVariant
    size?: ButtonSize
  }>(),
  {
    type: 'button',
  },
)
</script>

<template>
  <button
    :type="type"
    :disabled="isDisabled"
    :class="[
      'btn',
      variant && `btn--${variant}`,
      size && `btn--${size}`,
      { 'btn--disabled': isDisabled },
    ]"
  >
    <svg v-if="variant === 'close'" class="btn__icon" aria-hidden="true">
      <use href="/sprite.svg#icon-close" />
    </svg>
    <slot v-else />
  </button>
</template>
