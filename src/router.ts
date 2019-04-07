import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home/Home.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search/Search.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
