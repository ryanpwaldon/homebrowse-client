import Vue from 'vue'
import Vuex from 'vuex'

import ui from '@/store/modules/ui/ui'
import suburbs from '@/store/modules/suburbs/suburbs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ui,
    suburbs
  }
})
