import axios from 'axios'

const client = axios.create({ baseURL: process.env.VUE_APP_MAPBOX_GEOCODING_URL })

export default {

  async findBoundingBox (suburb) {
    const query = `${suburb.name}, ${suburb.state}`
    const response = await client.get(`/${query}.json`, { params: { access_token: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN, country: 'au', types: 'locality' } })
    const boundingBoxData = response.data.features[0].bbox
    const boundingBox = [
      [boundingBoxData[0], boundingBoxData[1]],
      [boundingBoxData[2], boundingBoxData[3]]
    ]
    return boundingBox
  }

}
