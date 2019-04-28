import Vue from 'vue'
import Vuex from 'vuex'

import globalModule from '@/store/modules/globalModule/globalModule'
import filterModule from '@/store/modules/filterModule/filterModule'
import suburbsModule from '@/store/modules/suburbsModule/suburbsModule'
import mapModule from '@/store/modules/mapModule/mapModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    globalModule,
    filterModule,
    suburbsModule,
    mapModule
  }
})
