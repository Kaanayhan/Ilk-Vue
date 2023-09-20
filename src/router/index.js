import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/Volim.vue')
    },
    {
      path: '/hakkimizda',
      component: () => import('../views/Volim.vue')
    },
    {
      path: '/sosyal',
      component: () => import('../views/Sosyal.vue')
    },
    {
      path: '/projeler',
      component: () => import('../views/Proje.vue')
    },
    {
      path: '/kayit',
      component: () => import('../views/Kayit.vue')
    },
    {
      path: '/yorum',
      component: () => import('../views/YorumYaz.vue')
    },
    {
      path: '/yorumlar',
      component: () => import('../views/YorumAlani.vue')
    }
  ]
})

export default router
