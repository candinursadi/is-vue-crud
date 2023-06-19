import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/transactions',
      name: 'TransactionIndex',
      component: () => import('../views/transactions/TransactionIndex.vue')
    },
    {
      path: '/transactions/create',
      name: 'TransactionCreate',
      component: () => import('../views/transactions/TransactionCreate.vue')
    },
    {
      path: '/transactions/:id/edit',
      name: 'TransactionEdit',
      component: () => import('../views/transactions/TransactionEdit.vue'),
      props: true
    }
  ]
})

export default router
