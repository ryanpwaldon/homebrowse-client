import Vue from 'vue'
import Vuex from 'vuex'

import globalModule from '@/store/modules/globalModule/globalModule'
import dashboardModule from '@/store/modules/dashboardModule/dashboardModule'
import filterModule from '@/store/modules/filterModule/filterModule'
import mapModule from '@/store/modules/mapModule/mapModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    globalModule,
    filterModule,
    dashboardModule,
    mapModule
  }
})
