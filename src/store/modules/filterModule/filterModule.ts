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
    updateFilterProperties ({ state, commit, dispatch, rootState }, payload) {
      commit('setFilter', payload)
      dispatch('dashboardModule/updateSuburbFilterProperties', {
        indexToUpdate: rootState.dashboardModule.selectedSuburbIndex,
        filterProperties: state.properties
      }, { root: true })
    },
    updateFilterStatistics ({ state, commit, dispatch, rootState }, payload) {
      commit('setFilter', payload)
      dispatch('dashboardModule/updateSuburbFilterStatistics', {
        indexToUpdate: rootState.dashboardModule.selectedSuburbIndex,
        filterStatistics: state.statistics
      }, { root: true })
    }
  }
}
