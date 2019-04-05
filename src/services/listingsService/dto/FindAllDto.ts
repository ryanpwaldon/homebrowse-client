export interface FindAllDto {
  locations: [Location],
  minBedrooms: string
  maxBedrooms: string
  minBathrooms: string
  maxBathrooms: string
  minCarspaces: string
  maxCarspaces: string
}

interface Location {
  suburb: string
  state: string
  postCode: string
  includeSurroundingSuburbs: boolean
}