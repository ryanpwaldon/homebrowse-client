import ListingsService from '@/services/ListingsService'

export default {
  state: {
    listings: [],
    filter: {
      search: {
        suburb: 'Glebe',
        state: 'NSW',
        postcode: '2037'
      },
      features: {
        bedrooms: '1',
        bathrooms: '1',
        carspaces: '1'
      }
    }
  },
  mutations: {
    updateFilter (state, value) {
      state.filter = value
      this.dispatch('fetchListings')
    },
    updateListings (state, value) {
      state.listings = value
    }
  },
  actions: {
    async fetchListings ({ commit, state }) {
      const listings = await ListingsService.get(state.filter)
      commit('updateListings', listings)
    }
  }
}
