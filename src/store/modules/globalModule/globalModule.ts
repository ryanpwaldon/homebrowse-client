export default {
  state: {
    searchState: false
  },
  mutations: {
    toggleSearchState (state) {
      state.searchState = !state.searchState
    }
  }
}
