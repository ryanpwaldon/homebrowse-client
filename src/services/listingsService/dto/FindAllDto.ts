export class FindAllDto {
  locations: [Location]
  minBedrooms: string = ''
  maxBedrooms: string = ''
  minBathrooms: string = ''
  maxBathrooms: string = ''
  minCarspaces: string = ''
  maxCarspaces: string = ''
  page: number = 0
  pageSize: number = 20

  constructor ({
    location,
    minBedrooms,
    maxBedrooms,
    minBathrooms,
    maxBathrooms,
    minCarspaces,
    maxCarspaces,
    page,
    pageSize
  }) {
    this.locations = [new Location(location)]
    this.minBedrooms = minBedrooms
    this.maxBedrooms = maxBedrooms
    this.minBathrooms = minBathrooms
    this.maxBathrooms = maxBathrooms
    this.minCarspaces = minCarspaces
    this.maxCarspaces = maxCarspaces
    this.page = page
    this.pageSize = pageSize
  }
}

class Location {
  suburb: string
  state: string
  postCode: string
  includeSurroundingSuburbs: boolean

  constructor ({
    state,
    suburb,
    postCode,
    includeSurroundingSuburbs
  }) {
    this.suburb = suburb
    this.state = state
    this.postCode = postCode
    this.includeSurroundingSuburbs = includeSurroundingSuburbs
  }
}
