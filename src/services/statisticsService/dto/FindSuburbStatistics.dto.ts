export class FindSuburbPerformanceStatisticsDto {
  suburb: string
  state: string
  postCode: string
  propertyCategory: string
  chronologicalSpan: number = 12
  tPlusFrom: number = 1
  tPlusTo: number = 1
  bedrooms?: number = 1
  values?: string

  constructor ({
    suburb,
    state,
    postCode,
    propertyCategory,
    bedrooms,
    values
  }) {
    this.suburb = suburb
    this.state = state
    this.postCode = postCode
    this.propertyCategory = propertyCategory
    this.bedrooms = bedrooms
    this.values = values
  }
}
