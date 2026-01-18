<script setup lang="ts">
import type { ProfileInfoItem, IProfileSettings } from '@/assets/types/type.profile'

import Button from './UI/buttons/Button.vue'
import { shortNameSurname } from '@/utils/shortNameSurname'
import { computed } from 'vue'
import { useAuthModal } from '@/composables/auth/useAuthModal'
const { handleLogOut } = useAuthModal()

const props = defineProps<IProfileSettings>()
const profileSettingConfig = computed<ProfileInfoItem[]>(() => [
  {
    labelName: 'Имя Фамилия ',
    value: props.profile!.name + ' ' + props.profile!.surname,
    addParameter: shortNameSurname(props.profile!.name, props.profile!.surname),
    hasIcon: false,
  },
  {
    labelName: 'Электронная почта ',
    value: props.profile!.email,
    addParameter: 'icon-email',
    hasIcon: true,
  },
])
</script>
<template>
  <div class="profile-settings">
    <div class="profile-settings__fields">
      <div
        v-for="config in profileSettingConfig"
        :key="config.value"
        class="profile-settings__field"
      >
        <div class="profile-settings__field-logo">
          <svg v-if="config.hasIcon" class="profile-settings__field-icon" aria-hidden="true">
            <use :href="`/sprite.svg#${config.addParameter}`" />
          </svg>
          <span v-else class="profile-settings__field-initials">{{ config.addParameter }}</span>
        </div>
        <div class="profile-settings__field-info">
          <span class="profile-settings__field-label">{{ config.labelName }}</span>
          <span class="profile-settings__field-label profile-settings__field-label--name">{{
            config.value
          }}</span>
        </div>
      </div>
    </div>
    <Button @click="handleLogOut" class="profile-settings__btn" variant="primary" size="m">
      Выйти из аккаунта
    </Button>
  </div>
</template>
