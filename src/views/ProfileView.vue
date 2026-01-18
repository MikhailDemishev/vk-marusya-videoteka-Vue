<script setup lang="ts">
import type { ProfileTabId } from '@/assets/types/type.tabs'
import MovieCard from '@/components/Movie/MovieCard.vue'
import ProfileSettings from '@/components/ProfileSettings.vue'
import Tabs from '@/components/UI/Tabs.vue'
import { useUserProfile } from '@/composables/auth/useProfile'
import { useDeleteFavorite } from '@/composables/favorites/useDeleteFavorite'
import { useGetFavorites } from '@/composables/favorites/useGetFavorites'
import Grid from '@/layout/Grid.vue'
import PageBoundary from '@/layout/PageBoundary.vue'
import PageLayout from '@/layout/PageLayout.vue'
import PageSection from '@/layout/PageSection.vue'
import { profileTabs } from '@/shared/config/profileTabs'
import { ref } from 'vue'
const userProfile = useUserProfile()
const favoritesList = useGetFavorites()
const deleteHandle = useDeleteFavorite()

const activeTab = ref<ProfileTabId>('favorites')

const handleChange = (id: ProfileTabId) => {
  activeTab.value = id
}
</script>

<template>
  <PageBoundary :is-loading="userProfile.isPending.value" :is-error="userProfile.error.value">
    <PageLayout pageName="profile">
      <PageSection section-name="profile" title="Мой аккаунт"
        ><template #header>
          <Tabs
            :tabs="profileTabs"
            :activeTab="activeTab"
            class-ext="profile"
            @change="handleChange"
          />
        </template>
        <ProfileSettings v-if="activeTab === 'profile'" :profile="userProfile.data.value!" />
        <PageBoundary
          v-else-if="activeTab === 'favorites'"
          :is-loading="favoritesList.isPending.value"
          :is-error="favoritesList.error.value"
        >
          <div class="profile-section__scroll">
            <div class="profile-section__scroll-wrapper">
              <Grid :items="favoritesList.data.value ?? []" class-ext="movie">
                <template #default="{ item, index }">
                  <MovieCard
                    :id="item.id"
                    :title="item.title"
                    :image-url="item.posterUrl"
                    :show-close-button="true"
                    @close-card="deleteHandle.mutate(item.id)"
                  />
                </template>
              </Grid>
            </div>
          </div>
        </PageBoundary>
      </PageSection>
    </PageLayout>
  </PageBoundary>
</template>
