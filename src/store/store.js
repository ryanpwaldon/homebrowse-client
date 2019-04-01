import Vue from 'vue'
import Vuex from 'vuex'

import listings from '@/store/modules/listings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    listings
  },
  state: {
    showSearch: false
  },
  mutations: {
    updateShowSearch (state, value) {
      state.showSearch = value
    }
  }
})
