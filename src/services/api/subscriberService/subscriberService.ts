import { api } from '@/services/api/api'

export default {

  post (email) {
    return api().post('/subscriber', { email })
  }

}
