import Vue from 'vue'
import mapService from '@/services/mapService/mapService'
import properties from './modules/properties/properties'
import statistics from './modules/statistics/statistics'

export default {
  namespaced: true,
  modules: {
    properties,
    statistics
  },
  state: {
    suburbs: [],
    selectedSuburbIndex: 0
  },
  mutations: {
    setSuburb (state, { insertionIndex, suburb }) {
      state.suburbs.splice(insertionIndex, 0, suburb)
    },
    setSelectedSuburbIndex (state, index) {
      state.selectedSuburbIndex = index
    },
    setSuburbBoundingBox (state, { indexToUpdate, boundingBox }) {
      Vue.set(state.suburbs[indexToUpdate], 'boundingBox', boundingBox)
    }
  },
  getters: {
    selectedSuburb (state) {
      return state.suburbs[state.selectedSuburbIndex]
    }
  },
  actions: {
    addSuburb ({ commit, dispatch }, suburbDetails) {
      const insertionIndex = 0
      const suburb = { details: suburbDetails }
      commit('setSuburb', { insertionIndex, suburb })
      commit('setSelectedSuburbIndex', insertionIndex)
      dispatch('updateSuburbBoundingBox', insertionIndex)
    },
    async updateSuburbBoundingBox ({ state, commit }, index) {
      const boundingBox = await mapService.findBoundingBox(state.suburbs[index].details)
      commit('setSuburbBoundingBox', { indexToUpdate: index, boundingBox })
    }
  }
}
