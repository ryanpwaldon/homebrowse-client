export default {
  namespaced: true,
  state: {
    registrationsEnabled: false,
    searchModalStatus: false,
    propertiesInViewById: [],
    propertyHoveredId: null
  },
  mutations: {
    setSearchModalStatus (state, status) {
      state.searchModalStatus = status
    },
    setPropertiesInViewById (state, ids) {
      state.propertiesInViewById = ids
    },
    setPropertyHoveredId (state, id) {
      state.propertyHoveredId = id
    }
  }
}
