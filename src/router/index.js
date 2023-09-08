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
     path:"/sosyal",
    component: () => import('../views/Sosyal.vue')
    },
    {
      path:"/projeler",
     component: () => import('../views/Proje.vue')
     },
     {
      path:"/kayit",
     component: () => import('../views/Kayit.vue')
     },
     {
      path:"/giris",
     component: () => import('../views/Giris.vue')
     }
  ]
})

export default router
