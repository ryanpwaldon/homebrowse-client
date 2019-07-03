import axios from 'axios'
import store from '@/store/store'
import qs from 'qs'

export const api = () => {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
      Authorization: store.getters.user ? `Bearer ${store.getters.user.token}` : ''
    }
  })
  // for encoding nested objects on request
  instance.interceptors.request.use(config => {
    config.paramsSerializer = params => {
      return qs.stringify(params, {
        arrayFormat: 'brackets',
        encode: false
      })
    }
    return config
  })
  return instance
}
