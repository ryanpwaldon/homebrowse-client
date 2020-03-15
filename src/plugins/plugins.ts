import Vue from 'vue'
import router from '../router'
import VueAnalytics from 'vue-analytics'
// import VueIntercom from 'vue-intercom'
import VueMq from 'vue-mq'

Vue.use(VueAnalytics, {
  id: 'UA-70168440-4',
  router
})

Vue.use(VueMq, {
  breakpoints: {
    sm: 820,
    lg: Infinity
  }
})

// Vue.use(VueIntercom, { appId: 'wwrlllbh' })

Vue.mixin({ data: () => ({ console }) })
