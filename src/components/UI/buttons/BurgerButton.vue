<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
})
</script>
<template>
  <button v-bind="$attrs" class="burger">
    <span class="burger__icon" />
  </button>
</template>
