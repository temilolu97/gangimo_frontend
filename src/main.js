import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import axios from 'axios'

Vue.use(Router)

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


import routes from './routes'

const router = new Router({
  routes,
  mode:'history'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  axios
}).$mount('#app')
