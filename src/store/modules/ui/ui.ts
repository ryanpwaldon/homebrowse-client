export default {
  namespaced: true,
  state: {
    searchModalStatus: false,
    selectedPlaceId: null,
    propertiesInViewById: []
  },
  mutations: {
    setSearchModalStatus (state, status) {
      state.searchModalStatus = status
    },
    setSelectedPlaceId (state, status) {
      state.searchModalStatus = status
    },
    setPropertiesInViewById (state, ids) {
      state.propertiesInViewById = ids
    }
  }
}
