import axios from 'axios'

const client = axios.create({ baseURL: process.env.VUE_APP_MAPBOX_GEOCODING_URL })

export default {

  async findAll (query) {
    try {
      const response = await client.get(`/${query}.json`, {
        params: {
          access_token: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN,
          autocomplete: true,
          types: 'locality',
          country: 'au'
        }
      })
      const results = response.data.features.map(async item => {
        return {
          name: item.text,
          longName: item.place_name,
          postcode: await this.findPostcode(item.center[0], item.center[1]),
          stateLong: item.context.find(item => item.id.startsWith('region')).text,
          stateShort: mapState[item.context.find(item => item.id.startsWith('region')).text],
          boundingBox: [
            [item.bbox[0], item.bbox[1]],
            [item.bbox[2], item.bbox[3]]
          ]
        }
      })
      return Promise.all(results)
    } catch (err) {
      console.error(err)
      return []
    }
  },

  async findPostcode (lng, lat) {
    try {
      const response = await client.get(`/${lng},${lat}.json`, {
        params: {
          access_token: process.env.VUE_APP_MAPBOX_ACCESS_TOKEN,
          types: 'postcode',
          country: 'au'
        }
      })
      const postcode = response.data.features[0].text || null
      return postcode
    } catch (err) {
      console.error(err)
      return null
    }
  }

}

const mapState = {
  'New South Wales': 'NSW',
  'Queensland': 'QLD',
  'Victoria': 'VIC',
  'Tasmania': 'TAS',
  'Northern Territory': 'NT',
  'South Australia': 'SA',
  'Western Australia': 'WA',
  'Australian Capital Territory': 'ACT'
}
