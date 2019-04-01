import Api from '@/services/Api'

export default {
  async get (query) {
    const response = await Api().get('/listings', {
      params: query
    })
    return response.data
  }
}
