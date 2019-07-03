import Vue from 'vue'
import Vuex from 'vuex'

import entities from '@/store/modules/entities/entities'
import ui from '@/store/modules/ui/ui'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    entities,
    ui
  }
})
