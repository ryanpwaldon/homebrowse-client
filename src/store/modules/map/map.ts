import mapService from '@/services/mapService/mapService'

export default {
  namespaced: true,
  state: {
    boundingBox: [
      { lng: 113.16000067720864, lat: -10.5955313927184 },
      { lng: 153.57087049622987, lat: -43.57483696227055 }
    ]
  },
  mutations: {
    setBoundingBox (state, boundingBox) {
      state.boundingBox = boundingBox
    }
  },
  actions: {
    async updateBoundingBox ({ commit }, location) {
      const boundingBox = await mapService.findBoundingBox(location)
      commit('setBoundingBox', boundingBox)
    }
  }
}
