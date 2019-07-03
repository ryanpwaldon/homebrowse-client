import { api } from '@/services/api/api'

export default {

  async findStatistics (query) {
    const response = await api().get('/statistics', { params: query }).catch(() => ({ data: [] }))
    return response.data
  }

}
