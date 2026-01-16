<script setup lang="ts">
import { useAuthModal } from '@/composables/auth/useAuthModal'

const { handleLogOut } = useAuthModal()
</script>

<template>
  <div class="container">
    <button @click="handleLogOut">Выйти</button>
  </div>
  <div>страница профиля</div>
</template>
