import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  }
]
const route = new Router({
  routes
})

export default route
