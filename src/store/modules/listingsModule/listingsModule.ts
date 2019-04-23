import listingsService from '@/services/listingsService/listingsService'
import statisticsService from '@/services/statisticsService/statisticsService'
import vueSetDeep from '@/utils/vueSetDeep'

export default {
  state: {
    search: {
      location: {
        suburb: '',
        state: '',
        postCode: ''
      },
      bedrooms: '',
      bathrooms: '',
      carspaces: '',
      listingType: 'buy'
    },
    listings: [],
    suburbStatistics: {},
    isLoading: false
  },
  mutations: {
    updateSearch (state, { property, value }) {
      vueSetDeep(state, property, value)
    },
    updateListings (state, value) {
      state.listings = value
    },
    updateStatistics (state, value) {
      state.statistics = value
    },
    updateIsLoading (state, value) {
      state.isLoading = value
    }
  },
  actions: {
    async fetchResults ({ state, commit }) {
      await Promise.all([
        this.dispatch('fetchListings'),
        this.dispatch('fetchStatistics'),
        this.dispatch('fetchBoundingBox', state.search.location)
      ])
    },
    async fetchListings ({ state, commit }) {
      const listings = await listingsService.findAll(state.search)
      commit('updateListings', listings)
      return Promise.resolve()
    },
    async fetchStatistics ({ state, commit }) {
      const statistics = await statisticsService.findStatistics(state.search)
      commit('updateStatistics', statistics)
      return Promise.resolve()
    }
  }
}
