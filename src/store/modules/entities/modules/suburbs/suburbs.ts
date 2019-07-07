import shortId from 'shortid'

export default {
  namespaced: true,
  state: {
    selectedId: null,
    items: {},
    ids: []
  },
  getters: {
    itemsById (state) {
      return state.ids.map(id => state.items[id])
    }
  },
  mutations: {
    addItem (state, item) {
      state.items[item.id] = item
    },
    addId (state, id) {
      state.ids = [ ...state.ids, id ]
    },
    deleteId (state, id) {
      const ids = [ ...state.ids ]
      ids.splice(ids.indexOf(id), 1)
      state.ids = ids
    },
    setSelectedId (state, id) {
      state.selectedId = id
    }
  },
  actions: {
    addItem ({ commit }, item) {
      item.id = shortId.generate()
      commit('addItem', item)
      commit('addId', item.id)
      commit('setSelectedId', item.id)
    },
    deleteItem ({ state, commit }, id) {
      if (id === state.selectedId) {
        const index = state.ids.indexOf(id)
        commit('setSelectedId', state.ids[index + 1] || state.ids[index - 1] || null)
      }
      commit('deleteId', id)
    }
  }
}
