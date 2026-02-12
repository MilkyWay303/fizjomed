import { createRouter, createWebHistory } from 'vue-router'
import O_nas from '../views/landing_page.vue'

const routes = [
  {
    path: '/',
    name: 'o_nas',
    component: O_nas
  },
  {
    path: '/oferta',
    name: 'oferta',
    component: () => import('../views/Oferta.vue') // Lazy-loading
  },
  {
    path: '/nasz-zespol',
    name: 'nasz-zespol',
    component: () => import('../views/Nasz_zespol.vue') // Lazy-loading
  },
  {
    path: '/galeria',
    name: 'galeria',
    component: () => import('../views/Galeria.vue') // Lazy-loading
  },
  {
    path: '/cennik',
    name: 'cennik',
    component: () => import('../views/Cennik.vue') // Lazy-loading
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: () => import('../views/Kontakt.vue') // Lazy-loading
  },
  {
    path: '/autor',
    name: 'autor',
    component: () => import('../views/Autor.vue') // Lazy-loading
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
