<script setup lang="ts">
import ModalManager from './components/Modal/ModalManager.vue'
import Layout from './layout/Layout.vue'
</script>

<template>
  <Layout>
    <RouterView />
  </Layout>
  <ModalManager />
</template>

<style scoped></style>
