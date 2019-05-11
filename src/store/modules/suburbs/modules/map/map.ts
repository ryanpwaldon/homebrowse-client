import mapService from '@/services/mapService/mapService'
import get from 'lodash/get'

export default {
  namespaced: true,
  getters: {
    boundingBox (_, __, ___, rootGetters) {
      return get(rootGetters, 'suburbs/selectedSuburb.map.boundingBox', null)
    }
  },
  actions: {
    async updateSelectedSuburbBoundingBox ({ commit, rootState, rootGetters }) {
      const index = rootState.suburbs.selectedSuburbIndex
      const suburbDetails = rootGetters['suburbs/selectedSuburb'].details
      const boundingBox = await mapService.findBoundingBox(suburbDetails)
      const value = { boundingBox }
      commit('suburbs/editSuburb', { index, key: 'map', value }, { root: true })
    }
  }
}
