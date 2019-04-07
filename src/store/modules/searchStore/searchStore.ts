import listingsService from '@/services/listingsService/listingsService'
import statisticsService from '@/services/statisticsService/statisticsService'

export default {
  state: {
    search: {
      location: {},
      listings: {},
      statistics: {
        propertyCategory: 'house'
      }
    },
    results: {
      listings: [],
      statistics: {}
    },
    pendingActions: new Set()
  },
  mutations: {
    updateSearchLocation (state, value) {
      state.search.location = value
      state.pendingActions
        .add('fetchListings')
        .add('fetchStatistics')
    },
    updateSearchListings (state, value) {
      state.search.listings = value
      state.pendingActions
        .add('fetchListings')
    },
    updateSearchStatistics (state, value) {
      state.search.statistics = value
      state.pendingActions
        .add('fetchStatistics')
    },
    updateListings (state, value) {
      state.results.listings = value
    },
    updateStatistics (state, value) {
      state.results.statistics = value
    },
    clearPendingActions (state) {
      state.pendingActions.clear()
    }
  },
  actions: {
    async fetchListings ({ commit, state }) {
      const listings = await listingsService.findAll({
        location: state.search.location,
        ...state.search.listings
      })
      commit('updateListings', listings)
    },
    async fetchStatistics ({ commit, state }) {
      const statistics = await statisticsService.findSuburbStatistics({
        ...state.search.location,
        ...state.search.statistics
      })
      commit('updateStatistics', statistics)
    },
    async updateResults ({ commit, state }) {
      const actions = []
      state.pendingActions.forEach(action => actions.push(this.dispatch(action)))
      await Promise.all([actions])
      commit('clearPendingActions')
    }
  }
}
