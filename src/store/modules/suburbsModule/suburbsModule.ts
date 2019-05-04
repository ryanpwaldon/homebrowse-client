import Vue from 'vue'
import listingsService from '@/services/listingsService/listingsService'
import statisticsService from '@/services/statisticsService/statisticsService'
import mapService from '@/services/mapService/mapService'
import isEqual from 'lodash/isEqual'
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
    setSuburbListings (state, { indexToUpdate, listings }) {
      Vue.set(state.suburbs[indexToUpdate], 'listings', listings)
    },
    setSuburbStatistics (state, { indexToUpdate, statistics }) {
      Vue.set(state.suburbs[indexToUpdate], 'statistics', statistics)
    },
    setSuburbBoundingBox (state, { indexToUpdate, boundingBox }) {
      Vue.set(state.suburbs[indexToUpdate], 'boundingBox', boundingBox)
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
      return state.suburbs[state.selectedSuburbIndex] && state.suburbs[state.selectedSuburbIndex].details
    },
    medianPriceData (state) {
      return state.suburbs[state.selectedSuburbIndex] && state.suburbs[state.selectedSuburbIndex].statistics.series && {
        labels: state.suburbs[state.selectedSuburbIndex].statistics.series.map(series => series.date),
        data: state.suburbs[state.selectedSuburbIndex].statistics.series.map(series => series.medianSoldPrice)
      }
    }
  },
  actions: {
    addSuburb ({ commit, dispatch }, suburbDetails) {
      const suburb = {
        details: suburbDetails,
        filter: {},
        listings: {},
        statistics: {}
      }
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
      if (!state.suburbs[indexToUpdate]) return
      const filterNeedsUpdating = !isEqual(state.suburbs[indexToUpdate].filter, filter)
      if (filterNeedsUpdating) {
        commit('setSuburbFilter', { indexToUpdate, filter })
        dispatch('updateSuburbData', indexToUpdate)
      }
    },
    async updateSuburbBoundingBox ({ state, commit }, index) {
      const boundingBox = await mapService.findBoundingBox(state.suburbs[index].details)
      commit('setSuburbBoundingBox', { indexToUpdate: index, boundingBox })
    },
    async updateSuburbData ({ commit, dispatch }, indexToUpdate) {
      commit('setIsLoading', true)
      await dispatch('updateSuburbListings', indexToUpdate)
      await dispatch('updateSuburbStatistics', indexToUpdate)
      commit('setIsLoading', false)
    },
    async updateSuburbListings ({ state, commit }, indexToUpdate) {
      const listings = await listingsService.findAll({ suburb: state.suburbs[indexToUpdate].details, ...state.suburbs[indexToUpdate].filter.listings })
      commit('setSuburbListings', { indexToUpdate, listings })
    },
    async updateSuburbStatistics ({ state, commit }, indexToUpdate) {
      const statistics = await statisticsService.findStatistics({ suburb: state.suburbs[indexToUpdate].details, ...state.suburbs[indexToUpdate].filter.statistics })
      commit('setSuburbStatistics', { indexToUpdate, statistics })
    }
  }
}
