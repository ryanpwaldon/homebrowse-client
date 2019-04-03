import Api from '@/services/Api'

export default {

  login (credentials) {
    return Api().post('/login', credentials)
  },

  register (newUser) {
    return Api().post('/register', newUser)
  }

}
