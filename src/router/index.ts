import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/genres',
      name: 'genres',
      component: () => import('../views/Genres.vue'),
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue'),
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: () => import('../views/MovieView.vue'),
    },
  ],
})

export default router
