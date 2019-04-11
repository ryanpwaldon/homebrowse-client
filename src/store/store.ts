import Vue from 'vue'
import Vuex from 'vuex'

import globalModule from '@/store/modules/globalModule/globalModule'
import listingsModule from '@/store/modules/listingsModule/listingsModule'
import mapModule from '@/store/modules/mapModule/mapModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    globalModule,
    listingsModule,
    mapModule
  }
})
