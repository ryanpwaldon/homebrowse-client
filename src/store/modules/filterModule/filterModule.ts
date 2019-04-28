import vueSetDeep from '@/utils/vueSetDeep'
import mergeSelect from '@/utils/mergeSelect'

export default {
  namespaced: true,
  state: {
    bedrooms: '',
    bathrooms: '',
    carspaces: '',
    listingType: 'buy'
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
