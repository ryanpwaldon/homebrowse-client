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
      const results = response.data.features.map(item => ({
        name: item.text,
        longName: item.place_name,
        postcode: item.context.find(item => item.id.startsWith('postcode')).text,
        stateLong: item.context.find(item => item.id.startsWith('region')).text,
        stateShort: mapState[item.context.find(item => item.id.startsWith('region')).text],
        boundingBox: [
          [item.bbox[0], item.bbox[1]],
          [item.bbox[2], item.bbox[3]]
        ]
      }))
      return results
    } catch (err) {
      console.error(err)
      return []
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
