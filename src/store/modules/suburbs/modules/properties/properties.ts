import propertiesService from '@/services/listingsService/propertiesService'
import vueSetDeep from '@/utils/vueSetDeep'
import isEqual from 'lodash/isEqual'
import get from 'lodash/get'

export default {
  namespaced: true,
  state: {
    filter: {
      bedrooms: '',
      bathrooms: '',
      carspaces: '',
      propertyType: 'buy'
    },
    loading: false
  },
  mutations: {
    setFilter (state, { key, value }) {
      vueSetDeep(state.filter, key, value)
    },
    setLoading (state, status) {
      state.loading = status
    }
  },
  getters: {
    dao (state, _, __, rootGetters) {
      return {
        suburb: get(rootGetters, 'suburbs/selectedSuburb.details', null),
        ...state.filter
      }
    },
    filterUpToDate (state, _, __, rootGetters) {
      return isEqual(
        get(rootGetters, 'suburbs/selectedSuburb.properties.filter', null),
        state.filter
      )
    },
    properties (_, __, ___, rootGetters) {
      return get(rootGetters, 'suburbs/selectedSuburb.properties.items', null)
    }
  },
  actions: {
    updateFilter ({ commit, dispatch, rootGetters }, { key, value }) {
      commit('setFilter', { key, value })
      if (rootGetters['suburbs/selectedSuburb']) dispatch('updateData')
    },
    async updateData ({ state, commit, getters, rootState }) {
      if (getters.filterUpToDate) return
      commit('setLoading', true)
      const index = rootState.suburbs.selectedSuburbIndex
      const filter = { ...state.filter } // does not include suburb details unlike getters.dao // spread operator to clone instead of reference
      const items = await propertiesService.findAll(getters.dao)
      const value = { items, filter }
      commit('suburbs/editSuburb', { index, key: 'properties', value }, { root: true })
      commit('setLoading', false)
    }
  }
}
