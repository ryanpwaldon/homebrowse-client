import vueSetDeep from '@/utils/vueSetDeep'
import mergeSelect from '@/utils/mergeSelect'

export default {
  namespaced: true,
  state: {
    selectedSuburbIndex: 0,
    bedrooms: '',
    bathrooms: '',
    carspaces: '',
    listingType: 'buy'
  },
  getters: {
    suburb (state, _, rootState) {
      const suburb = rootState.suburbModule.suburbs[state.selectedSuburbIndex]
      if (!suburb) return null
      return {
        name: suburb.name,
        state: suburb.state,
        postCode: suburb.postCode
      }
    },
    listingsFilter (state, getters) {
      return {
        suburb: getters.suburb,
        bedrooms: state.bedrooms,
        bathrooms: state.bathrooms,
        carspaces: state.carspaces,
        listingType: state.listingType
      }
    }
  },
  mutations: {
    updateFilter (state, { property, value }) {
      vueSetDeep(state, property, value)
    },
    updateSelectedSuburbIndex (state, index) {
      state.selectedSuburbIndex = index
    }
  }
}
