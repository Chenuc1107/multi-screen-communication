import Vue from 'vue';
import router from 'vue-router';
Vue.use(router)
const routes = [
  {
    path:'/',
    name:'home',
    component:()=> import('../views/home.vue')
  },
  {
    path:'/about',
    name:'about',
    component:()=> import('../views/about.vue')
  }
]
const route = new router({
  routes
})

export default route
