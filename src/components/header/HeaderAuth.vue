<script setup lang="ts">
import { useUserProfile } from '@/composables/auth/useProfile'
import Button from '../UI/buttons/Button.vue'
import { useAuthModal } from '@/composables/auth/useAuthModal'
import { computed } from 'vue'
const { data: profile } = useUserProfile()
const { handleLoginFormOpen } = useAuthModal()

const mobileProfileName = computed(() => {
  const name = profile.value?.name
  return name ? name.charAt(0) : ''
})
</script>

<template>
  <router-link
    v-if="profile"
    class="btn btn--menu btn--menu-active header__btn header__btn--auth"
    to="/profile"
  >
    <span class="btn__info btn__info--desktop">
      {{ profile.name }}
    </span>
    <span class="btn__info btn__info--mobile">
      {{ mobileProfileName }}
    </span>
  </router-link>
  <Button v-else variant="menu" class="header__btn header__btn--auth" @click="handleLoginFormOpen">
    <span class="header__btn-content">
      <svg class="header__btn-icon" aria-hidden="true">
        <use href="/sprite.svg#icon-avatar" />
      </svg>
      <span class="header__btn-text">Войти</span>
    </span>
  </Button>
</template>
