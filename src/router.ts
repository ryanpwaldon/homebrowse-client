import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/Dashboard/Dashboard.vue'),
      children: [
        {
          path: 'properties',
          name: 'properties',
          component: () => import('@/views/Dashboard/views/Properties/Properties.vue')
        },
        {
          path: 'statistics',
          name: 'statistics',
          component: () => import('@/views/Dashboard/views/Statistics/Statistics.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login/Login.vue')
    },
    {
      path: '*',
      redirect: '/dashboard'
    }
  ]
})
