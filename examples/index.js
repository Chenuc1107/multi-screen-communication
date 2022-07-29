import Vue from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import '../lib/assets/styles/app.css'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
