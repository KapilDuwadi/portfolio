import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Education from '../views/Education.vue'
import Publication from '../views/Publication.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/work',
    name: 'Work',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Work.vue')
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/publication',
    name: 'Publication',
    component: Publication
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
