import ListingsService from '@/services/ListingsService/ListingsService'

export default {
  state: {
    listings: [],
    filter: {
    }
  },
  mutations: {
    updateListings (state, value) {
      state.listings = value
    }
  },
  actions: {
    async fetchListings ({ commit, state }, value) {
      const listings = await ListingsService.findAll(value)
      commit('updateListings', listings)
    }
  }
}
