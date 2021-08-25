import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: '/',
      redirect: '/test'
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