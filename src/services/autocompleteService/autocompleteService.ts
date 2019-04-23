import loadGoogleMapsApi from 'load-google-maps-api'

export default class AutocompleteService {
  maps = null
  autocompleteService = null
  placesService = null
  apiKey: string = null
  libraries: Array<string> = ['places']
  types = ['(cities)']
  componentRestrictions = { country: 'aus' }
  attributionEl = null

  constructor (attributionEl) {
    this.apiKey = process.env.VUE_APP_GOOGLE_MAPS_API_KEY
    this.attributionEl = attributionEl
  }

  async init () {
    if (this.autocompleteService) return
    this.maps = await loadGoogleMapsApi({
      libraries: this.libraries,
      key: this.apiKey
    })
    this.autocompleteService = new this.maps.places.AutocompleteService()
    this.placesService = new this.maps.places.PlacesService(this.attributionEl)
  }

  async findAll (query) {
    if (!query) return
    await this.init()
    return new Promise((resolve, reject) => {
      this.autocompleteService.getPlacePredictions({
        input: query,
        types: this.types,
        componentRestrictions: this.componentRestrictions
      }, (predictions, status) => {
        if (status !== this.maps.places.PlacesServiceStatus.OK) return resolve([])
        const places = predictions.map(prediction => ({
          title: prediction.description,
          id: prediction.place_id
        }))
        return resolve(places)
      })
    })
  }

  findOne (id) {
    return new Promise((resolve, reject) => {
      this.placesService.getDetails({ placeId: id }, (place, status) => {
        if (status !== this.maps.places.PlacesServiceStatus.OK) return
        const placeDetails = {
          suburb: place.address_components.find(item => item.types[0] === 'locality').short_name,
          state: place.address_components.find(item => item.types[0] === 'administrative_area_level_1').short_name,
          postCode: place.address_components.find(item => item.types[0] === 'postal_code').short_name
        }
        return resolve(placeDetails)
      })
    })
  }
}
