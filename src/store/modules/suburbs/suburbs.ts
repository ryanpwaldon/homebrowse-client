import Vue from 'vue'
import mapService from '@/services/mapService/mapService'
import properties from './modules/properties/properties'
import statistics from './modules/statistics/statistics'
import vueSetDeep from '@/utils/vueSetDeep'

export default {
  namespaced: true,
  modules: {
    properties,
    statistics
  },
  state: {
    suburbs: [],
    selectedSuburbIndex: 0,
    view: 'properties'
  },
  mutations: {
    setView (state, view) {
      state.view = view
    },
    setSuburb (state, { insertionIndex, suburb }) {
      state.suburbs.splice(insertionIndex, 0, suburb)
    },
    editSuburb (state, { index, key, value }) {
      vueSetDeep(state.suburbs[index], key, value)
    },
    setSelectedSuburbIndex (state, index) {
      state.selectedSuburbIndex = index
    }
  },
  getters: {
    selectedSuburb (state) {
      return state.suburbs[state.selectedSuburbIndex]
    }
  },
  actions: {
    updateSelectedDashboardSubviewData ({ dispatch, rootState }) {
      dispatch(`${rootState.ui.selectedDashboardSubview}/updateData`)
    },
    updateSelectedSuburbIndex ({ commit, dispatch }, index) {
      commit('setSelectedSuburbIndex', index)
      dispatch('updateSelectedDashboardSubviewData')
    },
    addSuburb ({ commit, dispatch }, suburbDetails) {
      const insertionIndex = 0
      const suburb = { details: suburbDetails }
      commit('setSuburb', { insertionIndex, suburb })
      dispatch('updateSelectedSuburbIndex', insertionIndex)
    }
    // removeSuburb ({ commit, dispatch }, index) {
    //   // commit('setSuburb', { insertionIndex, suburb })
    //   dispatch('updateSelectedDashboardSubviewData')
    // }
  }
}

// Add remove suburb action + mutation
