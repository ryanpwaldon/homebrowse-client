import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'

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
          path: 'suburb',
          component: () => import('@/views/Dashboard/views/Suburb/Suburb.vue'),
          children: [
            {
              path: '',
              redirect: () => store.state.ui.suburbRouteLastVisitedTabName
            },
            {
              path: 'properties',
              name: 'properties',
              component: () => import('@/views/Dashboard/views/Suburb/views/Properties/Properties.vue')
            },
            {
              path: 'statistics',
              name: 'statistics',
              component: () => import('@/views/Dashboard/views/Suburb/views/Statistics/Statistics.vue')
            }
          ]
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
