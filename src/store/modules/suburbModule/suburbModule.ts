import Vue from 'vue'
import listingsService from '@/services/listingsService/listingsService'
import isEqual from 'lodash/isEqual'

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
    },
    updateSuburbFilter (state, { selectedSuburbIndex, filter }) {
      state.suburbs[selectedSuburbIndex].filter = filter
    }
  },
  getters: {
    listings (state, _, rootState) {
      return state.suburbs[rootState.filterModule.selectedSuburbIndex]
        ? state.suburbs[rootState.filterModule.selectedSuburbIndex].listings
        : []
    }
  },
  actions: {
    addSuburb ({ commit, dispatch, rootState }, suburb) {
      commit('updateSuburbs', suburb)
      commit('filterModule/setSelectedSuburbIndex', 0, { root: true })
      commit('updateSuburbFilter', {
        filter: (({ selectedSuburbIndex, ...filterModule }) => filterModule)(rootState.filterModule),
        selectedSuburbIndex: rootState.filterModule.selectedSuburbIndex
      })
      dispatch('fetchListings')
    },
    ensureSuburbFilterUpToDate ({ commit, dispatch, state, rootState }) {
      const suburbFilterUpToDate = isEqual( // globalFilter vs selectedSuburbFilter
        (({ selectedSuburbIndex, ...filterModule }) => filterModule)(rootState.filterModule),
        state.suburbs[rootState.filterModule.selectedSuburbIndex].filter
      )
      if (!suburbFilterUpToDate) {
        dispatch('fetchListings')
        commit('updateSuburbFilter', {
          filter: (({ selectedSuburbIndex, ...filterModule }) => filterModule)(rootState.filterModule),
          selectedSuburbIndex: rootState.filterModule.selectedSuburbIndex
        })
      }
    },
    async fetchListings ({ commit, rootGetters, rootState }) {
      console.log('fetched')
      commit('updateIsLoading', true)
      const listings = await listingsService.findAll(rootGetters['filterModule/listingsFilter'])
      commit('updateListings', {
        selectedSuburbIndex: rootState.filterModule.selectedSuburbIndex,
        listings
      })
      commit('updateIsLoading', false)
    }
  }
}
