<script setup lang="ts">
import type { ITabProps } from '@/assets/types/type.tabs'

const props = defineProps<ITabProps>()

const emit = defineEmits<{
  (e: 'change', tabId: string): void
}>()

const handleChange = (tabId: string) => {
  emit('change', tabId)
}
</script>

<template>
  <div :class="[`${props.classExt}-tabs`, 'tabs']">
    <button
      v-for="tab in props.tabs"
      :key="tab.tabId"
      type="button"
      :class="['tab', tab.tabId === props.activeTab && 'tab--active']"
      @click="handleChange(tab.tabId)"
    >
      <span class="tab__icon-wrapper">
        <svg
          :class="['tab__icon', `tab__icon--${tab.icon}`]"
          :width="tab.iconWidth"
          :height="tab.iconHeight"
          aria-hidden="true"
        >
          <use :href="`/sprite#${tab.icon}`" />
        </svg>
      </span>

      <span class="tab__label">{{ tab.label }}</span>
      <span class="tab__label tab__label--mobile">{{ tab.labelMobile }}</span>
    </button>
  </div>
</template>
