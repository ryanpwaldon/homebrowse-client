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
      propertyType: '',
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
    setRootFilter (state, { key, value }) {
      Vue.set(state.rootFilter, key, value)
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
    async fetchItems ({ state, commit, rootState }, id) {
      // check filter === rootFilter
      if (isEqual(state.filters[id], state.rootFilter)) return
      commit('setLoading', true)
      commit('setFilter', { id, rootFilter: { ...state.rootFilter } })
      commit('setPage', { id, page: 1 })
      const dao = getDao(state.filters[id], rootState.entities.suburbs.items[id], state.pages[id])
      const items = await propertiesService.findAll(dao)
      if (!items.length) commit('setPage', { id, page: -1 })
      commit('setItems', items)
      const ids = items.map(item => item.id)
      commit('setList', { id, ids })
      commit('setLoading', false)
    },
    async fetchItemsNextPage ({ state, commit, rootState }, id) {
      commit('setPage', { id, page: state.pages[id] + 1 })
      const dao = getDao(state.filters[id], rootState.entities.suburbs.items[id], state.pages[id])
      const items = await propertiesService.findAll(dao)
      if (!items.length) commit('setPage', { id, page: -1 })
      commit('setItems', items)
      const ids = [ ...(state.lists[id] || []), ...items.map(item => item.id) ]
      commit('setList', { id, ids })
    },
    addId ({ state, commit }, id) {
      if (state.ids.includes(id)) return commit('setSelectedId', id)
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
    },
    updateRootFilter ({ commit, dispatch, rootState }, { key, value }) {
      commit('setRootFilter', { key, value })
      dispatch('fetchItems', rootState.entities.suburbs.selectedId)
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
