import { api } from '@/services/api/api'

export default {

  checkAuthStatus () {
    return api().get('/auth/status')
  },

  login (credentials) {
    return api().post('/auth/login', credentials)
  },

  getProfile () {
    return api().post('/auth/status')
  },

  register (user) {
    return api().post('/auth/register', user)
  },

  logout () {
    return api().post('/auth/logout')
  }

}
