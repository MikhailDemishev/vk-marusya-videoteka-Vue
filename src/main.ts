import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'

import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'
import './assets/styles/style.scss'

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPersist)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

app.use(pinia)

app.use(VueQueryPlugin, {
  queryClient,
})

app.use(router)

app.mount('#app')
