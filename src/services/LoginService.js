import Api from '@/services/Api'

export default {
  post (credentials) {
    return Api().post('/login', credentials)
  }
}
