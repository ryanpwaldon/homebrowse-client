export default {
  namespaced: true,
  state: {
    searchModalStatus: false,
    selectedDashboardSubview: 'properties'
  },
  mutations: {
    setSelectedDashboardSubview (state, dashboardSubview) {
      state.selectedDashboardSubview = dashboardSubview
    },
    setSearchModalStatus (state, status) {
      state.searchModalStatus = status
    }
  },
  actions: {
    updateSelectedDashboardSubview ({ commit, dispatch }, dashboardSubview) {
      commit('setSelectedDashboardSubview', dashboardSubview)
      dispatch('suburbs/updateSelectedDashboardSubviewData', null, { root: true })
    }
  }
}
