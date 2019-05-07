import Vue from 'vue'
import Vuex from 'vuex'

import global from '@/store/modules/global/global'
import suburbs from '@/store/modules/suburbs/suburbs'
import map from '@/store/modules/map/map'
import ui from '@/store/modules/ui/ui'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    global,
    suburbs,
    map,
    ui
  }
})
