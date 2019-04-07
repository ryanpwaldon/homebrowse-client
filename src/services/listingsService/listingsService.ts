import { api } from '@/services/api'
import { FindAllDto } from './dto/FindAllDto'

export default {

  async findAll (query) {
    const response = await api().get('/listings', {
      params: new FindAllDto(query)
    })
    return response.data
  },

  findOne (id: string) {
    return api().get(`/listings/${id}`)
  }

}
