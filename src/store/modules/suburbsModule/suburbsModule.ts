import Vue from 'vue'
import listingsService from '@/services/listingsService/listingsService'
import merge from 'lodash/merge'

export default {
  namespaced: true,
  state: {
    suburbs: [],
    selectedSuburbIndex: 0,
    isLoading: false
  },
  mutations: {
    setSuburb (state, { insertionIndex, suburb }) {
      state.suburbs.splice(insertionIndex, 0, suburb)
    },
    setSelectedSuburbIndex (state, index) {
      state.selectedSuburbIndex = index
    },
    setSuburbFilter (state, { indexToUpdate, filter }) {
      merge(state.suburbs[indexToUpdate].filter, filter)
    },
    setListings (state, { indexToUpdate, listings }) {
      Vue.set(state.suburbs[indexToUpdate], 'listings', listings)
    },
    setIsLoading (state, isLoading) {
      state.isLoading = isLoading
    }
  },
  getters: {
    listings (state) {
      return state.suburbs[state.selectedSuburbIndex] && state.suburbs[state.selectedSuburbIndex].listings
    }
  },
  actions: {
    addSuburb ({ rootState, commit, dispatch }, suburbDetails) {
      const suburb = { filter: { suburb: { ...suburbDetails } } }
      const insertionIndex = 0
      commit('setSuburb', { insertionIndex, suburb })
      commit('setSelectedSuburbIndex', insertionIndex)
      dispatch('updateSuburbFilter', { indexToUpdate: insertionIndex, filter: rootState.filterModule })
    },
    updateSelectedSuburbIndex ({ commit, dispatch, rootState }, index) {
      dispatch('updateSuburbFilter', {
        indexToUpdate: index,
        filter: rootState.filterModule
      })
      commit('setSelectedSuburbIndex', index)
    },
    updateSuburbFilter ({ commit, dispatch }, { indexToUpdate, filter }) {
      commit('setSuburbFilter', { indexToUpdate, filter })
      dispatch('updateListings', indexToUpdate)
    },
    async updateListings ({ state, commit }, indexToUpdate) {
      commit('setIsLoading', true)
      const listings = await listingsService.findAll(state.suburbs[indexToUpdate].filter)
      commit('setListings', { indexToUpdate, listings })
      commit('setIsLoading', false)
    }
  }
}
