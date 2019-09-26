import userService from '@/services/api/userService/userService'

export default {
  namespaced: true,
  state: {
    userProfile: null,
    loginFailed: false,
    accessToken: localStorage.getItem('accessToken') || null
  },
  mutations: {
    setUserProfile (state, value) {
      state.userProfile = value
    },
    setAccessToken (state, value) {
      state.accessToken = value
    },
    setLoginFailed (state, value) {
      state.loginFailed = value
    }
  },
  actions: {
    async checkAuthStatus ({ dispatch }) {
      const { data: { userProfile, accessToken } } = await userService.checkAuthStatus()
      if (!userProfile) return dispatch('logout')
      dispatch('updateUser', { userProfile, accessToken })
    },
    async login ({ commit, dispatch }, credentials) {
      const { data: { userProfile, accessToken } } = await userService.login(credentials)
      if (!userProfile) { commit('setLoginFailed', true); dispatch('logout'); return {} }
      commit('setLoginFailed', false)
      dispatch('updateUser', { userProfile, accessToken })
      return { userProfile, accessToken }
    },
    updateUser ({ commit }, { userProfile: { password, ...userProfile }, accessToken }) {
      this._vm.$ga.set({ userId: userProfile.id })
      // boot intercom here
      localStorage.setItem('accessToken', accessToken)
      commit('setUserProfile', userProfile)
      commit('setAccessToken', accessToken)
    },
    logout ({ commit }) {
      localStorage.removeItem('accessToken')
      commit('setUserProfile', null)
      commit('setAccessToken', null)
    }
  }
}
