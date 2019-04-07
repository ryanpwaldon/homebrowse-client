import Vue from 'vue'
import Vuex from 'vuex'

import globalStore from '@/store/modules/globalStore/globalStore'
import searchStore from '@/store/modules/searchStore/searchStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    globalStore,
    searchStore
  }
})
