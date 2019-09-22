import Vue from 'vue'
import router from '../router'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
  id: 'UA-70168440-4',
  router
})
