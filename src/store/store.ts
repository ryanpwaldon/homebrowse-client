import Vue from 'vue'
import Vuex from 'vuex'

import globalStore from '@/store/modules/globalStore/globalStore'
import listingsStore from '@/store/modules/listingsStore/listingsStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    globalStore,
    listingsStore
  }
})
