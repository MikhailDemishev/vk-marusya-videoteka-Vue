<script setup lang="ts">
import Socials from '@/components/UI/Socials.vue'
import ThemeSwitcher from './ThemeSwitcher.vue'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <ThemeSwitcher parent-class-name="footer" />
        <Socials />
      </div>
    </div>
  </footer>
</template>
