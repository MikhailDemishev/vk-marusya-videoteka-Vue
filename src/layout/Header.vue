<script setup lang="ts">
import HeaderAuth from '@/components/header/HeaderAuth.vue'
import HeaderSearch from '@/components/header/HeaderSearch.vue'
import AppLogo from '@/components/UI/AppLogo.vue'
import BurgerButton from '@/components/UI/buttons/BurgerButton.vue'
import Button from '@/components/UI/buttons/Button.vue'
import Nav from '@/components/UI/Nav.vue'
import { useMobileHeaderMode } from '@/composables/layout/useMobileHeaderMode'

const { mobileMode, toggleBurger, resetToDefault, openMenu, openSearch } = useMobileHeaderMode()
const headerNavItems = [
  { label: 'Главная', to: '/' },
  { label: 'Жанры', to: '/genres' },
]
</script>

<template>
  <header class="header">
    <div class="container">
      <div :class="['header__inner', `header__inner--${mobileMode}`]">
        <div class="header__left">
          <BurgerButton class="header__btn header__btn--burger" @click="toggleBurger" />

          <router-link class="header__link" to="/">
            <AppLogo class="header__app-logo" @click="resetToDefault" />
          </router-link>
        </div>
        <div class="header__right">
          <div class="header__menu">
            <Button variant="menu" class="header__btn header__btn--menu" @click="openMenu">
              <svg class="header__btn-icon" aria-hidden="true">
                <use href="/sprite.svg#mobile-nav" />
              </svg>
            </Button>
            <Nav class="header__nav" :items="headerNavItems" @select="resetToDefault" />
          </div>
          <div class="header__panel">
            <Button variant="menu" class="header__btn header__btn--search" @click="openSearch">
              <svg class="header__btn-icon" aria-hidden="true">
                <use href="/sprite.svg#icon-search" />
              </svg>
            </Button>
            <HeaderSearch
              :is-error="false"
              class="header__search header-search"
              v-on:reset-mobile="resetToDefault"
            />
          </div>
          <HeaderAuth />
        </div>
      </div>
    </div>
  </header>
</template>
