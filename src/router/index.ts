import {createRouter, createWebHistory} from 'vue-router'

import home from '@/views/home/index.vue'
import mine from '@/views/mine/index.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home,
    meta: {
      title: '',
      keepAlive: false
    }
  },
  {
    path: '/mine',
    name: 'mine',
    component: mine,
    meta: {
      title: '',
      keepAlive: false
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
