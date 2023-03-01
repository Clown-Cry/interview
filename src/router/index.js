import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../pages/home.vue'
import Signup from '../pages/signup.vue'
import NotFound from '../pages/notFound.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/notFound',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
    beforeEnter: (to, from, next) => {
      let verification = localStorage.getItem('role')
      if (verification === 'admin') {
        if (to.name === 'Signup') {
          next()
        }
      } else {
        next('/notFound')
      }
    },
  },

]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
