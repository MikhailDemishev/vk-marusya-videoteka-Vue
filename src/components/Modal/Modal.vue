<script setup lang="ts">
import type { IModalState } from '@/assets/types/type.modal'
import Button from '../UI/buttons/Button.vue'

defineProps<IModalState>()

const emit = defineEmits(['close'])
</script>

<template>
  <div
    :class="[
      'modal',
      modalIsOpen ? 'modal--open' : 'modal--closed',
      typeOfModal && `modal--${typeOfModal}`,
    ]"
  >
    <div class="modal__overlay"></div>
    <div class="modal__wrapper">
      <div class="modal__window">
        <slot />
      </div>
      <Button class="modal__close-btn" variant="close" @click="emit('close')"> </Button>
    </div>
  </div>
</template>
