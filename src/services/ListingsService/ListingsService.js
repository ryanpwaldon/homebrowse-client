import Api from '@/services/Api'

export default {

  async findAll (query) {
    const response = await Api().get('/listings', {
      params: query
    })
    return response.data
  },

  async findOne (id) {
    const response = await Api().get(`/listings/${id}`)
    return response.data
  }

}
