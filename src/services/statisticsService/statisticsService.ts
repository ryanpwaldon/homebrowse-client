import { api } from '@/services/api'
import { FindSuburbPerformanceStatisticsDto } from './dto/FindSuburbStatistics.dto'

export default {

  async findSuburbStatistics (query) {
    const response = await api().get('/statistics', {
      params: new FindSuburbPerformanceStatisticsDto(query)
    })
    return response.data
  }

}
