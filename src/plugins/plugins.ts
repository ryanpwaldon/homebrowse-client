import Vue from 'vue'
import router from '../router'
import VueAnalytics from 'vue-analytics'
import VueIntercom from 'vue-intercom'
import VueMq from 'vue-mq'

Vue.use(VueAnalytics, {
  id: 'UA-70168440-4',
  router
})

Vue.use(VueMq, {
  breakpoints: {
    small: 820,
    large: Infinity
  }
})

Vue.use(VueIntercom, { appId: 'wwrlllbh' })
