import vueSetDeep from '@/utils/vueSetDeep'

export default {
  namespaced: true,
  state: {
    listings: {
      bedrooms: '',
      bathrooms: '',
      carspaces: '',
      listingType: 'buy'
    },
    statistics: {
      propertyCategory: 'house'
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
      dispatch('suburbsModule/updateSuburbFilter', {
        indexToUpdate: rootState.suburbsModule.selectedSuburbIndex,
        filter: state
      }, { root: true })
    }
  }
}
