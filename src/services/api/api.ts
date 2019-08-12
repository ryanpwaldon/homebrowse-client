import axios from 'axios'
import store from '@/store/store'
import router from '@/router'
import qs from 'qs'

export const api = () => {
  const instance = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL,
    headers: {
      Authorization: `Bearer ${store.state.user.accessToken}`
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

  // configure 401 response
  instance.interceptors.response.use(
    response => response,
    error => {
      if (error.response.status === 401) {
        router.push('/login')
        store.dispatch('user/removeAccessToken')
        return error.response
      } else return Promise.reject(error)
    }
  )

  return instance
}
