import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      props: true,
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/details',
      name: 'details',
      props: true,
      component: () => import('../views/DetailView.vue'),
    },
    {
      path: '/adding',
      name: 'adding',
      props: true,
      component: () => import('../views/AddingRecipeView.vue')
    }
  ]
})

export default router
