<script setup lang="ts">
import { useModalStore } from '@/stores/modal.store'
import { storeToRefs } from 'pinia'
import Modal from './Modal.vue'
import AuthCard from '../Auth/AuthCard.vue'
import MovieTrailer from '../Movie/MovieTrailer.vue'

const modalStore = useModalStore()
const { modalIsOpen, typeOfModal } = storeToRefs(modalStore)
const { closeModal } = modalStore
</script>
<template>
  <Modal
    :modal-is-open="modalIsOpen"
    :type-of-modal="typeOfModal"
    :class="{ trailer: typeOfModal === 'trailer' }"
    @close="closeModal"
  >
    <AuthCard v-if="typeOfModal === 'auth'" />
    <MovieTrailer v-else-if="typeOfModal === 'trailer'" />
  </Modal>
</template>
