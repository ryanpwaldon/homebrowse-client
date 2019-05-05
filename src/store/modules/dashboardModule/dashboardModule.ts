import Vue from 'vue'
import propertiesService from '@/services/propertiesService/propertiesService'
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
    setSuburbFilterProperties (state, { indexToUpdate, filterProperties }) {
      merge(state.suburbs[indexToUpdate].filter.properties, filterProperties)
    },
    setSuburbFilterStatistics (state, { indexToUpdate, filterStatistics }) {
      merge(state.suburbs[indexToUpdate].filter.statistics, filterStatistics)
    },
    setSuburbProperties (state, { indexToUpdate, properties }) {
      Vue.set(state.suburbs[indexToUpdate], 'properties', properties)
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
    properties (state) {
      return state.suburbs[state.selectedSuburbIndex] && state.suburbs[state.selectedSuburbIndex].properties
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
        filter: {
          properties: {},
          statistics: {}
        },
        properties: {},
        statistics: {}
      }
      const insertionIndex = 0
      commit('setSuburb', { insertionIndex, suburb })
      dispatch('updateSelectedSuburbIndex', insertionIndex)
      dispatch('updateSuburbBoundingBox', insertionIndex)
    },
    updateSelectedSuburbIndex ({ commit, dispatch, rootState }, index) {
      switch (rootState.globalModule.filterState) {
        case 'properties':
          dispatch('updateSuburbFilterProperties', {
            indexToUpdate: index,
            filterProperties: rootState.filterModule.properties
          })
          break
        case 'statistics':
          dispatch('updateSuburbFilterStatistics', {
            indexToUpdate: index,
            filterStatistics: rootState.filterModule.statistics
          })
          break
      }
      commit('setSelectedSuburbIndex', index)
    },
    async updateSuburbBoundingBox ({ state, commit }, index) {
      const boundingBox = await mapService.findBoundingBox(state.suburbs[index].details)
      commit('setSuburbBoundingBox', { indexToUpdate: index, boundingBox })
    },

    updateSuburbFilterProperties ({ state, commit, dispatch }, { indexToUpdate, filterProperties }) {
      if (!state.suburbs[indexToUpdate]) return
      const filterNeedsUpdating = !isEqual(state.suburbs[indexToUpdate].filter.properties, filterProperties)
      if (filterNeedsUpdating) {
        commit('setSuburbFilterProperties', { indexToUpdate, filterProperties })
        dispatch('updateSuburbProperties', indexToUpdate)
      }
    },

    updateSuburbFilterStatistics ({ state, commit, dispatch }, { indexToUpdate, filterStatistics }) {
      if (!state.suburbs[indexToUpdate]) return
      const filterNeedsUpdating = !isEqual(state.suburbs[indexToUpdate].filter.statistics, filterStatistics)
      if (filterNeedsUpdating) {
        commit('setSuburbFilterStatistics', { indexToUpdate, filterStatistics })
        dispatch('updateSuburbStatistics', indexToUpdate)
      }
    },

    async updateSuburbProperties ({ state, commit }, indexToUpdate) {
      commit('setIsLoading', true)
      console.log('fetched properties')
      const properties = await propertiesService.findAll({ suburb: state.suburbs[indexToUpdate].details, ...state.suburbs[indexToUpdate].filter.properties })
      commit('setSuburbProperties', { indexToUpdate, properties })
      commit('setIsLoading', false)
    },

    async updateSuburbStatistics ({ state, commit }, indexToUpdate) {
      commit('setIsLoading', true)
      console.log('fetched statistics')
      const statistics = await statisticsService.findStatistics({ suburb: state.suburbs[indexToUpdate].details, ...state.suburbs[indexToUpdate].filter.statistics })
      commit('setSuburbStatistics', { indexToUpdate, statistics })
      commit('setIsLoading', false)
    }

  }
}
