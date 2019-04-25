import Vue from 'vue'
import Vuex from 'vuex'

import globalModule from '@/store/modules/globalModule/globalModule'
import filterModule from '@/store/modules/filterModule/filterModule'
import suburbModule from '@/store/modules/suburbModule/suburbModule'
import mapModule from '@/store/modules/mapModule/mapModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    globalModule,
    filterModule,
    suburbModule,
    mapModule
  }
})
