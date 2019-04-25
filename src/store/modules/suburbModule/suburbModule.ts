import Vue from 'vue'
import listingsService from '@/services/listingsService/listingsService'

export default {
  namespaced: true,
  state: {
    suburbs: [],
    isLoading: false
  },
  mutations: {
    updateSuburbs (state, suburb) {
      state.suburbs.unshift(suburb)
    },
    updateListings (state, { selectedSuburbIndex, listings }) {
      Vue.set(state.suburbs[selectedSuburbIndex], 'listings', listings)
    },
    updateIsLoading (state, isLoading) {
      state.isLoading = isLoading
    }
  },
  getters: {
    listings (state, getters, rootState) {
      return state.suburbs[rootState.filterModule.selectedSuburbIndex]
        ? state.suburbs[rootState.filterModule.selectedSuburbIndex].listings
        : []
    }
  },
  actions: {
    addSuburb ({ state, commit, dispatch, rootState }, suburb) {
      commit('updateSuburbs', suburb)
      commit('filterModule/updateSelectedSuburbIndex', 0, { root: true })
      dispatch('fetchListings', rootState.filterModule.selectedSuburbIndex)
    },
    async fetchListings ({ commit, rootState, rootGetters }, selectedSuburbIndex) {
      commit('updateIsLoading', true)
      const listings = await listingsService.findAll(rootGetters['filterModule/listingsFilter'])
      commit('updateListings', {
        selectedSuburbIndex,
        listings
      })
      commit('updateIsLoading', false)
    }
  }
}
