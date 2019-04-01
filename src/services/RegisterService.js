import Api from '@/services/Api'

export default {
  post (newUser) {
    return Api().post('/register', newUser)
  }
}
