export default {
  namespaced: true,
  state: {
    searchModalStatus: false,
    suburbRouteLastVisitedTabName: 'properties'
  },
  mutations: {
    setSearchModalStatus (state, status) {
      state.searchModalStatus = status
    },
    setSuburbRouteLastVisitedTabName (state, name) {
      state.suburbRouteLastVisitedTabName = name
    }
  }
}
