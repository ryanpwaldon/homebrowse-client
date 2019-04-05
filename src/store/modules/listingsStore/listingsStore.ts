import listingsService from '@/services/listingsService/listingsService'
import { FindAllDto } from '@/services/listingsService/dto/FindAllDto'

export default {
  state: {
    filter: {},
    listings: [],
    suburbStatistics: {}
  },
  mutations: {
    updateFilter (state, filter: FindAllDto) {
      state.filter = filter
    },
    updateListings (state, value) {
      state.listings = value
    }
  },
  actions: {
    async fetchListings ({ commit }, value) {
      const listings = await listingsService.findAll(value)
      commit('updateListings', listings)
    }
  }
}
