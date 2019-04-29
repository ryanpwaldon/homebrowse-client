import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/app',
      name: 'app',
      component: () => import('@/views/App/App.vue'),
      children: [
        {
          path: 'properties',
          name: 'properties',
          component: () => import('@/views/App/views/Properties/Properties.vue')
        },
        {
          path: 'statistics',
          name: 'statistics',
          component: () => import('@/views/App/views/Statistics/Statistics.vue')
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
      redirect: '/app'
    }
  ]
})
