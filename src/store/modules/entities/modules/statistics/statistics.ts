import statisticsService from '@/services/api/statisticsService/statisticsService'

export default {
  namespaced: true,
  state: {
    items: {},
    rootFilter: {
      bedrooms: '',
      propertyCategory: '',
      periods: 10
    },
    loading: true
  },
  getters: {
    medianSoldPrice (state, _, __, rootGetters) {
      if (!Object.keys(state.items).length) return []
      return rootGetters['entities/suburbs/itemsById'].reduce((acc, suburb) => {
        if (state.items[suburb.id]) {
          acc.push({
            id: suburb.id,
            name: suburb.name,
            dates: state.items[suburb.id].map(series => series.date),
            values: state.items[suburb.id].map(series => series.medianSoldPrice)
          })
        }
        return acc
      }, [])
    }
  },
  mutations: {
    setItems (state, items) {
      state.items = items
    },
    setLoading (state, status) {
      state.loading = status
    }
  },
  actions: {
    async fetchItems ({ state, commit, rootGetters }) {
      const suburbs = rootGetters['entities/suburbs/itemsById']
      if (suburbs.map(suburb => suburb.id).every(id => !!state.items[id])) return // if all suburb statistics already fetched
      commit('setLoading', true)
      const ids = []
      let items = await Promise.all(suburbs.reduce((acc, suburb) => {
        if (!state.items[suburb.id]) {
          ids.push(suburb.id)
          const dao = getDao(suburb)
          acc.push(statisticsService.findStatistics(dao))
        }
        return acc
      }, []))
      items = ids.reduce((acc, id, index) => {
        acc[id] = items[index]
        return acc
      }, {})
      items = { ...state.items, ...items }
      commit('setItems', items)
      commit('setLoading', false)
    }
  }
}

const getDao = suburb => ({
  name: suburb.name,
  state: suburb.stateShort,
  postcode: suburb.postcode
})
