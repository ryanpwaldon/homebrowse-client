import { api } from '@/services/api/api'

export default {

  register (user) {
    return api().post('/auth/register', user)
  },

  login (credentials) {
    return api().post('/auth/login', credentials)
  },

  checkAuthStatus () {
    return api().get('/auth/status')
  },

  logout () {
    return api().post('/auth/logout')
  },

  getProfile () {
    return api().post('/auth/status')
  }

}
