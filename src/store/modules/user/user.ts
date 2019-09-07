import userService from '@/services/api/userService/userService'

export default {
  namespaced: true,
  state: {
    accessToken: localStorage.getItem('accessToken') || null,
    loginFailed: false
  },
  mutations: {
    setAccessToken (state, value) {
      state.accessToken = value
    },
    setLoginFailed (state, value) {
      state.loginFailed = value
    }
  },
  actions: {
    async checkAuthStatus ({ dispatch }) {
      const { data: { userId } } = await userService.checkAuthStatus()
      if (userId) return true
      else dispatch('removeAccessToken')
      return false
    },
    async login ({ commit, dispatch }, credentials) {
      const { data: { access_token: accessToken } } = await userService.login(credentials)
      if (accessToken) {
        commit('setLoginFailed', false)
        dispatch('updateAccessToken', accessToken)
      } else {
        commit('setLoginFailed', true)
        dispatch('removeAccessToken')
      }
      return accessToken
    },
    removeAccessToken ({ commit }) {
      localStorage.removeItem('accessToken')
      commit('setAccessToken', null)
    },
    updateAccessToken ({ commit }, accessToken) {
      localStorage.setItem('accessToken', accessToken)
      commit('setAccessToken', accessToken)
    }
  }
}