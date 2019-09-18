import Vue from 'vue'
import Router from 'vue-router'
import { APP, FIXED } from '@/components/BaseLayout/layout.types'
import store from '@/store/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home/Home.vue')
    },
    {
      path: '/workspace',
      name: 'workspace',
      component: () => import('@/views/Workspace/Workspace.vue'),
      meta: { layout: APP, requiresAuth: true },
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
      component: () => import('@/views/Login/Login.vue'),
      meta: { layout: FIXED }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

let firstLoad = true
router.beforeEach(async (to, _, next) => {
  if (firstLoad) {
    firstLoad = false
    if (store.state.user.accessToken) await store.dispatch('user/checkAuthStatus')
    return store.state.user.accessToken ? sendTo('/workspace') : sendTo('/')
  } else {
    const requiresAuth = !!to.matched.find(item => item.meta.requiresAuth)
    if (requiresAuth) return store.state.user.accessToken ? next() : next('/')
    else return next()
  }
  function sendTo (path) { return to.path === path ? next() : next(path) }
})

export default router
