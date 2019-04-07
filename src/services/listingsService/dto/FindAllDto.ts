export class FindAllDto {
  locations: [Location]
  minBedrooms: number
  maxBedrooms: number
  minBathrooms: number
  maxBathrooms: number
  minCarspaces: number
  maxCarspaces: number
  listingType: string

  constructor ({
    location,
    bedrooms,
    bathrooms,
    carspaces,
    listingType
  }) {
    this.locations = [new Location(location)]
    this.minBedrooms = mapFeatures[bedrooms][0]
    this.maxBedrooms = mapFeatures[bedrooms][1]
    this.minBathrooms = mapFeatures[bathrooms][0]
    this.maxBathrooms = mapFeatures[bathrooms][1]
    this.minCarspaces = mapFeatures[carspaces][0]
    this.maxCarspaces = mapFeatures[carspaces][1]
    this.listingType = listingType
    console.log(this)
  }
}

class Location {
  suburb: string
  state: string
  postCode: string

  constructor ({
    suburb,
    state,
    postCode
  }) {
    this.suburb = suburb
    this.state = state
    this.postCode = postCode
  }
}

const mapFeatures = {
  'Any': ['', ''],
  'S': ['S', 'S'],
  '0': ['0', '0'],
  '1': ['1', '1'],
  '2': ['2', '2'],
  '3': ['3', '3'],
  '4': ['4', '4'],
  '5+': ['5', '']
}
