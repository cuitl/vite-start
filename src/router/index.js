import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from '../views/NotFound.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // lazy load component
    component: () => import('../views/About.vue')
  },
  {
    path: '/:path(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes
})

export default router
