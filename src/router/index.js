import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/index.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/test.vue'),
    }
  ]
})
export default router