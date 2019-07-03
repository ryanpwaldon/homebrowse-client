export default {
  namespaced: true,
  state: {
    searchModalStatus: false,
    selectedPlaceId: null
  },
  mutations: {
    setSearchModalStatus (state, status) {
      state.searchModalStatus = status
    },
    setSelectedPlaceId (state, status) {
      state.searchModalStatus = status
    }
  }
}
