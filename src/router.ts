import Vue from 'vue'
import Router from 'vue-router'
import { APP } from '@/components/BaseLayout/layout.types'
import store from '@/store/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/workspace',
      name: 'workspace',
      component: () => import('@/views/Workspace/Workspace.vue'),
      meta: { layout: APP },
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

let firstLoad = true
router.beforeEach(async (to, _, next) => {
  if (firstLoad && store.state.user.accessToken) await store.dispatch('user/checkAuthStatus')
  firstLoad = false
  !store.state.user.accessToken
    ? to.path === '/login' ? next() : next('/login')
    : to.path === '/login' ? next('/') : next()
})

export default router
