import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import login from '@/view/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
  ]
})
