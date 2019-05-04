import vueSetDeep from '@/utils/vueSetDeep'

export default {
  namespaced: true,
  state: {
    properties: {
      bedrooms: '',
      bathrooms: '',
      carspaces: '',
      propertyType: 'buy'
    },
    statistics: {
      propertyCategory: 'house',
      bedrooms: ''
    }
  },
  mutations: {
    setFilter (state, { property, value }) {
      vueSetDeep(state, property, value)
    }
  },
  actions: {
    updateFilter ({ state, commit, dispatch, rootState }, payload) {
      commit('setFilter', payload)
      dispatch('dashboardModule/updateSuburbFilter', {
        indexToUpdate: rootState.dashboardModule.selectedSuburbIndex,
        filter: state
      }, { root: true })
    }
  }
}
