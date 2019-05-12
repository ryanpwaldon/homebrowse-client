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
    async updateData ({ state, commit, getters, rootState, rootGetters }, isNextPageRequest) {
      if (getters.filterUpToDate && !isNextPageRequest) return
      if (!isNextPageRequest) commit('setLoading', true)
      const index = rootState.suburbs.selectedSuburbIndex
      const filter = { ...state.filter } // does not include suburb details unlike getters.dao // spread operator to clone instead of reference
      let page = get(rootGetters, 'suburbs/selectedSuburb.properties.page', 1)
      if (isNextPageRequest) page++
      const itemsPrev = get(rootGetters, 'suburbs/selectedSuburb.properties.items', [])
      const itemsNext = await propertiesService.findAll({ ...getters.dao, page })
      const items = [...itemsPrev, ...itemsNext]
      const value = { filter, page, items }
      commit('suburbs/editSuburb', { index, key: 'properties', value }, { root: true })
      if (!isNextPageRequest) commit('setLoading', false)
    }
  }
}