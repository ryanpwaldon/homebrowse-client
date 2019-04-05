import { api } from '@/services/api'

export default {

  login (credentials) {
    return api().post('/login', credentials)
  },

  register (newUser) {
    return api().post('/register', newUser)
  }

}
