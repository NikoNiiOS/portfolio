import App from '@/App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', name: 'Home', component: App,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: ()=> import('@/views/ErrorView.vue')
    }
  ]
})

export default router
