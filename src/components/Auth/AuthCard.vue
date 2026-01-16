<script setup lang="ts">
import AppLogo from '../UI/AppLogo.vue'
import Button from '../UI/buttons/Button.vue'

import { useAuthModalStatusStore } from '@/stores/auth.store'
import { AUTH_UI } from './authConfig'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

const authTypeStore = useAuthModalStatusStore()
const { setAuthFormStatus } = authTypeStore
const { authFormStatus } = storeToRefs(authTypeStore)

const handleAuthSwitch = () => setAuthFormStatus(AUTH_UI[authFormStatus.value].switchTo)
const Form = computed(() => AUTH_UI[authFormStatus.value].form)
</script>

<template>
  <div class="auth-card" :class="{ 'auth-card--success': authFormStatus === 'success' }">
    <AppLogo />
    <p class="auth-card__title">{{ AUTH_UI[authFormStatus].title }}</p>
    <p v-if="authFormStatus === 'success'" class="auth-card__success-message">
      Используйте вашу электронную почту для входа
    </p>
    <component v-if="Form" :is="Form" />
    <Button type="button" size="m" class="btn--invert auth-card__btn" @click="handleAuthSwitch">{{
      AUTH_UI[authFormStatus].switchBtn
    }}</Button>
  </div>
</template>
