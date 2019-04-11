import axios from 'axios'

const client = axios.create({ baseURL: process.env.VUE_APP_MAPBOX_GEOCODING_URL })

export default {

  async findBoundingBox (location) {
    const query = `${location.suburb}, ${location.state}`
    const response = await client
      .get(`/${query}.json`, { params: { access_token: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN, country: 'au', types: 'locality' } })
    const unformattedBoundingBox = response.data.features[0].bbox
    const boundingBox = [
      [unformattedBoundingBox[0], unformattedBoundingBox[1]],
      [unformattedBoundingBox[2], unformattedBoundingBox[3]]
    ]
    return boundingBox
  }

}
