import Vue from 'vue'
import listingsService from '@/services/listingsService/listingsService'
import mapService from '@/services/mapService/mapService'
import merge from 'lodash/merge'
import isEqual from 'lodash/isEqual'

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
    setSuburbBoundingBox (state, { indexToUpdate, boundingBox }) {
      Vue.set(state.suburbs[indexToUpdate], 'boundingBox', boundingBox)
    },
    setSuburbListings (state, { indexToUpdate, listings }) {
      Vue.set(state.suburbs[indexToUpdate], 'listings', listings)
    },
    setIsLoading (state, isLoading) {
      state.isLoading = isLoading
    }
  },
  getters: {
    listings (state) {
      return state.suburbs[state.selectedSuburbIndex] && state.suburbs[state.selectedSuburbIndex].listings
    },
    boundingBox (state) {
      return state.suburbs[state.selectedSuburbIndex] && state.suburbs[state.selectedSuburbIndex].boundingBox
    },
    suburb (state) {
      return state.suburbs[state.selectedSuburbIndex] && state.suburbs[state.selectedSuburbIndex].filter.suburb
    }
  },
  actions: {
    addSuburb ({ commit, dispatch }, suburbDetails) {
      const suburb = { filter: { suburb: { ...suburbDetails } } }
      const insertionIndex = 0
      commit('setSuburb', { insertionIndex, suburb })
      dispatch('updateSelectedSuburbIndex', insertionIndex)
      dispatch('updateSuburbBoundingBox', insertionIndex)
    },
    updateSelectedSuburbIndex ({ commit, dispatch, rootState }, index) {
      dispatch('updateSuburbFilter', {
        indexToUpdate: index,
        filter: rootState.filterModule
      })
      commit('setSelectedSuburbIndex', index)
    },
    updateSuburbFilter ({ state, commit, dispatch }, { indexToUpdate, filter }) {
      const filterNeedsUpdating = !isEqual(state.suburbs[indexToUpdate].filter, { ...filter, suburb: state.suburbs[indexToUpdate].filter.suburb })
      if (filterNeedsUpdating) {
        commit('setSuburbFilter', { indexToUpdate, filter })
        dispatch('updateSuburbListings', indexToUpdate)
      }
    },
    async updateSuburbBoundingBox ({ state, commit }, index) {
      const boundingBox = await mapService.findBoundingBox(state.suburbs[index].filter.suburb)
      commit('setSuburbBoundingBox', { indexToUpdate: index, boundingBox })
    },
    async updateSuburbListings ({ state, commit }, indexToUpdate) {
      commit('setIsLoading', true)
      const listings = await listingsService.findAll(state.suburbs[indexToUpdate].filter)
      commit('setSuburbListings', { indexToUpdate, listings })
      commit('setIsLoading', false)
    }
  }
}
