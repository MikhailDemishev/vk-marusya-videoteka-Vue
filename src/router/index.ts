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
      children: [
        {
          path: '',
          name: 'genres',
          component: () => import('../views/GenresView.vue'),
        },
        {
          path: ':key',
          name: 'genre',
          component: () => import('../views/GenreView.vue'),
        },
      ],
    },

    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/ProfileView.vue'),
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: () => import('../views/MovieView.vue'),
    },
  ],
})

export default router
