import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(),
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
    meta: {
      index: 1
    }
  },]
})
export default router