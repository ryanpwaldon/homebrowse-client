export default {
  namespaced: true,
  state: {
    searchState: false,
    filterState: 'properties'
  },
  mutations: {
    toggleSearchState (state) {
      state.searchState = !state.searchState
    },
    setFilterState (state, filterState) {
      state.filterState = filterState
    }
  }
}
