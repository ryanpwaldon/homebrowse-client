import { api } from '@/services/api'

export default {

  auth (credentials) {
    return api().post('/auth', credentials)
  },

  register (user) {
    return api().post('/register', user)
  }

}
