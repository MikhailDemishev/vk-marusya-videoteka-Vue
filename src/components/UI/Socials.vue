<script setup lang="ts">
import type { ISocial } from '@/assets/types/type.socials'

const socials: ISocial[] = [
  {
    id: 1,
    href: 'https://vk.com',
    icon: 'vk-logo',
    width: 19,
    height: 10,
    alt: 'VK',
    mod: 'vk',
  },
  {
    id: 2,
    href: 'https://youtube.com',
    icon: 'youtube-logo',
    width: 16,
    height: 12,
    alt: 'YouTube',
    mod: 'yt',
  },
  {
    id: 3,
    href: 'https://ok.ru',
    icon: 'ok-logo',
    width: 11,
    height: 18,
    alt: 'OK',
    mod: 'ok',
  },
  {
    id: 4,
    href: 'https://t.me',
    icon: 'tg-logo',
    width: 17,
    height: 14,
    alt: 'Telegram',
    mod: 'tg',
  },
]
</script>
<template>
  <div class="socials">
    <a
      v-for="s in socials"
      class="socials__item"
      :href="s.href"
      :key="s.id"
      :aria-label="s.alt"
      target="_blank"
    >
      <svg
        :class="['socials__logo', `socials__logo--${s.mod}`]"
        :width="s.width"
        :height="s.height"
        aria-hidden="true"
      >
        <use :href="`/sprite.svg#${s.icon}`" />
      </svg>
    </a>
  </div>
</template>
