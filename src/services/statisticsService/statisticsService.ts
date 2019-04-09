import { api } from '@/services/api'

export default {

  async findStatistics (query) {
    const response = await api().get('/statistics', { params: query })
    return response.data
  }

}
