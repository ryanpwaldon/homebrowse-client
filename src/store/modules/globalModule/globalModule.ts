export default {
  namespaced: true,
  state: {
    searchState: false
  },
  mutations: {
    toggleSearchState (state) {
      state.searchState = !state.searchState
    }
  }
}
