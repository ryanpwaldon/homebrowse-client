import Vue from 'vue'
import isEqual from 'lodash/isEqual'
import propertiesService from '@/services/api/propertiesService/propertiesService'

export default {
  namespaced: true,
  state: {
    selectedId: null,
    items: {},
    ids: [],
    filters: {},
    lists: {},
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
    setItems (state, items) {
      items.forEach(item => Vue.set(state.items, item.id, item))
    },
    setPage (state, { id, page }) {
      Vue.set(state.pages, id, page)
    },
    setFilter (state, { id, rootFilter }) {
      Vue.set(state.filters, id, rootFilter)
    },
    setList (state, { id, ids }) {
      Vue.set(state.lists, id, ids)
    },
    setLoading (state, status) {
      state.loading = status
    },
    setIds (state, ids) {
      state.ids = ids
    },
    setSelectedId (state, id) {
      state.selectedId = id
    }
  },
  actions: {
    async fetchItems ({ state, commit, rootState }, { id, nextPage }) {
      if (isEqual(state.filters[id], state.rootFilter) && !nextPage) return // check filter / rootFilter equality, if equal prevent re-fetch
      if (!nextPage) commit('setLoading', true)
      const rootFilter = state.rootFilter
      commit('setFilter', { id, rootFilter })
      const suburb = rootState.entities.suburbs.items[id]
      const page = Number(state.pages[id] + 1) || 1
      commit('setPage', { id, page })
      const dao = getDao(rootFilter, suburb, page)
      const items = await propertiesService.findAll(dao)
      if (!items.length) commit('setPage', { id, page: -1 })
      commit('setItems', items)
      const ids = [ ...(state.lists[id] || []), ...items.map(item => item.id) ]
      commit('setList', { id, ids })
      if (!nextPage) commit('setLoading', false)
    },
    addId ({ state, commit }, id) {
      const ids = [ ...state.ids, id ]
      commit('setIds', ids)
      commit('setSelectedId', id)
    },
    deleteId ({ state, commit }, id) {
      if (id === state.selectedId) {
        const index = state.ids.indexOf(id)
        commit('setSelectedId', state.ids[index + 1] || state.ids[index - 1] || null)
      }
      const ids = [ ...state.ids ]
      ids.splice(ids.indexOf(id), 1)
      commit('setIds', ids)
    }
  }
}

const getDao = (filter, suburb, page) => ({
  ...filter,
  name: suburb.name,
  state: suburb.stateShort,
  postcode: suburb.postcode,
  page
})
