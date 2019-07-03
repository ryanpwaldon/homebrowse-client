import Vue from 'vue'
import propertiesService from '@/services/api/propertiesService/propertiesService'

export default {
  namespaced: true,
  state: {
    items: {},
    loading: false
  },
  mutations: {
    setItem (state, item) {
      Vue.set(state.items, item.id, item)
    },
    setLoading (state, status) {
      state.loading = status
    }
  },
  actions: {
    async fetchItem ({ state, commit }, { id }) {
      if (state.items[id]) return
      commit('setLoading', true)
      const item = await propertiesService.findOne(id)
      commit('setItem', item)
      commit('setLoading', false)
    }
  }
}
