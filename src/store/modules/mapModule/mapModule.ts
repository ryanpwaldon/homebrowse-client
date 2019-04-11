import mapService from '@/services/mapService/mapService'

export default {
  state: {
    boundingBox: [
      { lng: 113.16000067720864, lat: -10.5955313927184 },
      { lng: 153.57087049622987, lat: -43.57483696227055 }
    ]
  },
  mutations: {
    updateBoundingBox (state, value) {
      state.boundingBox = value
    }
  },
  actions: {
    async fetchBoundingBox ({ commit }, location) {
      const boundingBox = await mapService.findBoundingBox(location)
      commit('updateBoundingBox', boundingBox)
      Promise.resolve()
    }
  }
}
