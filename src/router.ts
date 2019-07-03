import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/workspace',
      name: 'workspace',
      component: () => import('@/views/Workspace/Workspace.vue'),
      children: [
        {
          path: 'suburb',
          component: () => import('@/views/Workspace/views/Suburb/Suburb.vue'),
          children: [
            {
              path: '',
              redirect: 'properties'
            },
            {
              path: 'properties',
              name: 'properties',
              component: () => import('@/views/Workspace/views/Suburb/views/Properties/Properties.vue')
            },
            {
              path: 'statistics',
              name: 'statistics',
              component: () => import('@/views/Workspace/views/Suburb/views/Statistics/Statistics.vue')
            }
          ]
        },
        {
          path: 'property',
          component: () => import('@/views/Workspace/views/Property/Property.vue'),
          children: [
            {
              path: '',
              redirect: 'detail'
            },
            {
              path: 'detail',
              name: 'detail',
              component: () => import('@/views/Workspace/views/Property/views/Detail/Detail.vue')
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
      redirect: '/workspace'
    }
  ]
})
