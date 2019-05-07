import statisticsService from '@/services/statisticsService/statisticsService'
import vueSetDeep from '@/utils/vueSetDeep'
import isEqual from 'lodash/isEqual'
import get from 'lodash/get'

export default {
  namespaced: true,
  state: {
    filter: {
      propertyCategory: 'house',
      bedrooms: ''
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
        get(rootGetters, 'suburbs/selectedSuburb.statistics.filter', null),
        state.filter
      )
    },
    chartDataSoldMedianPrice (_, __, ___, rootGetters) {
      const series = get(rootGetters, 'suburbs/selectedSuburb.statistics.items.series', [])
      return {
        labels: series.map(series => series.date),
        data: series.map(series => series.medianSoldPrice)
      }
    },
    statisticSoldMedianPrice (_, __, ___, rootGetters) {
      const series = get(rootGetters, 'suburbs/selectedSuburb.statistics.items.series', null)
      return get(series, `${get(series, 'length', null) - 1}.medianSoldPrice`, null)
    },
    statisticRentMedianPrice (_, __, ___, rootGetters) {
      const series = get(rootGetters, 'suburbs/selectedSuburb.statistics.items.series', null)
      return get(series, `${get(series, 'length', null) - 1}.medianRentListingPrice`, null)
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
      const items = await statisticsService.findStatistics(getters.dao)
      const value = { items, filter }
      commit('suburbs/editSuburb', { index, key: 'statistics', value }, { root: true })
      commit('setLoading', false)
    }
  }
}
