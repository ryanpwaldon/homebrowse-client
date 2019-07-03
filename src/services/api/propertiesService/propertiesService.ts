import { api } from '@/services/api/api'

export default {

  async findAll (query) {
    const response = await api().get('/listings', { params: query })
    return response.data
  },

  async findOne (id: string) {
    const response = await api().get(`/listings/${id}`)
    return response.data
  }

}
