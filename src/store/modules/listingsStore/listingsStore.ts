import listingsService from '@/services/listingsService/listingsService'
import vueSetDeep from '@/utils/vueSetDeep'

export default {
  state: {
    search: {
      location: {
        suburb: '',
        state: '',
        postCode: ''
      },
      bedrooms: 'Any',
      bathrooms: 'Any',
      carspaces: 'Any',
      listingType: 'Sale'
    },
    listings: [],
    suburbStatistics: {}
  },
  mutations: {
    updateSearch (state, { property, value }) {
      vueSetDeep(state, property, value)
    },
    updateListings (state, value) {
      state.listings = value
    }
  },
  actions: {
    async fetchListings ({ state, commit }) {
      const listings = await listingsService.findAll(state.search)
      commit('updateListings', listings)
      commit('updateSearchState', false)
    }
  }
}
