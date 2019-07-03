import isEqual from 'lodash/isEqual'
import propertiesService from '@/services/api/propertiesService/propertiesService'

export default {
  namespaced: true,
  state: {
    items: {},
    filters: {},
    collections: {},
    pages: {},
    rootFilter: {
      bedrooms: '',
      bathrooms: '',
      carspaces: '',
      listingType: 'buy',
      sort: 'updatedDescending'
    },
    loading: false
  },
  mutations: {
    addItems (state, items) {
      items.forEach(item => (state.items[item.id] = item))
      state.items = { ...state.items }
    },
    setPage (state, { id, page }) {
      state.pages[id] = page
      state.pages = { ...state.pages }
    },
    setFilter (state, { id, rootFilter }) {
      state.filters[id] = rootFilter
      state.filters = { ...state.filters }
    },
    setCollections (state, { id, items }) {
      state.collections[id] = [ ...(state.collections[id] || []), ...items.map(item => item.id) ]
      state.collections = { ...state.collections }
    },
    setLoading (state, status) {
      state.loading = status
    }
  },
  actions: {
    async fetchItems ({ state, commit, dispatch, rootState }, { id, nextPage }) {
      if (!nextPage) commit('setLoading', true)
      if (filterUpToDate(state.filters[id], state.rootFilter) && !nextPage) {
        commit('setLoading', false)
        return
      }
      const filter = await dispatch('updateFilter', { id, rootFilter: state.rootFilter })
      const suburb = rootState.entities.suburbs.items[id]
      const page = await dispatch('updatePage', { id, page: 1 + (state.pages[id] || 0) })
      const dao = getDao(filter, suburb, page)
      const items = (await propertiesService.findAll(dao)).listings
      if (!items.length) dispatch('updatePage', { id, page: -1 })
      commit('addItems', items)
      commit('setCollections', { id, items })
      if (!nextPage) commit('setLoading', false)
      return items
    },
    updatePage ({ commit }, { id, page }) {
      commit('setPage', { id, page })
      return page
    },
    updateFilter ({ commit }, { id, rootFilter }) {
      commit('setFilter', { id, rootFilter })
      return rootFilter
    }
  }
}

const filterUpToDate = (filter, rootFilter) => {
  return isEqual(filter, rootFilter)
}

const getDao = (filter, suburb, page) => ({
  ...filter,
  name: suburb.name,
  state: suburb.stateShort,
  postcode: suburb.postcode,
  page
})
