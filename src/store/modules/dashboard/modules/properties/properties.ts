import propertiesService from '@/services/listingsService/propertiesService'
import vueSetDeep from '@/utils/vueSetDeep'
import isEqual from 'lodash/isEqual'
import get from 'lodash/get'
import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    filter: {
      bedrooms: '',
      bathrooms: '',
      carspaces: '',
      propertyType: 'buy'
    },
    data: [],
    loading: false
  },
  mutations: {
    setFilter (state, { key, value }) {
      vueSetDeep(state.filter, key, value)
    },
    setData (state, { index, properties, filter }) {
      Vue.set(state.data, index, { properties, filter })
    },
    setLoading (state, status) {
      state.loading = status
    }
  },
  getters: {
    selected (state, _, rootState) {
      return get(state.data, '[' + rootState.dashboard.selectedSuburbIndex + ']' + '.properties', [])
    },
    dao (state, getters, rootState, rootGetters) {
      return {
        suburb: get(rootGetters, 'dashboard/selectedSuburb.details', null),
        ...state.filter
      }
    },
    filterUpToDate (state, getters, rootState) {
      return isEqual(
        get(state.data, rootState.dashboard.selectedSuburbIndex + '.filter', null),
        state.filter
      )
    }
  },
  actions: {
    updateFilter ({ commit, dispatch, rootGetters }, { key, value }) {
      commit('setFilter', { key, value })
      if (rootGetters['dashboard/selectedSuburb']) dispatch('updateData')
    },
    async updateData ({ state, commit, getters, rootState }) {
      if (getters.filterUpToDate) return
      commit('setLoading', true)
      const index = rootState.dashboard.selectedSuburbIndex
      const filter = { ...state.filter } // does not include suburb details unlike getters.dao // spread operator to clone instead of reference
      const properties = await propertiesService.findAll(getters.dao)
      commit('setData', { index, properties, filter })
      commit('setLoading', false)
    }
  }
}
