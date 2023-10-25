import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../views/VoliBear.vue')
    },
    {
      path: '/hakkimizda',
      component: () => import('../views/VoliBear.vue')
    },
    {
      path: '/sosyal',
      component: () => import('../views/SociaL.vue')
    },
    {
      path: '/projeler',
      component: () => import('../views/ProjecT.vue')
    },
    {
      path: '/kayit',
      component: () => import('../views/RegisteR.vue')
    },
    {
      path: '/yorum',
      component: () => import('../views/CommentSend.vue')
    },
    {
      path: '/yorumlar',
      component: () => import('../views/CommentArea.vue')
    },
    {
      path: '/havadurumu',
      component: () => import('../views/WeatheR.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  const nav = document.querySelector('.navbar input[type="checkbox"]')
  if (nav.checked) {
    nav.checked = false 
  }
  next()
})

export default router
