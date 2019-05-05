import Vue from 'vue'
import Vuex from 'vuex'

import global from '@/store/modules/global/global'
import dashboard from '@/store/modules/dashboard/dashboard'
import filter from '@/store/modules/filter/filter'
import map from '@/store/modules/map/map'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    global,
    filter,
    dashboard,
    map
  }
})
