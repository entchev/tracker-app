import axios from 'axios'
import { AsyncStorage } from 'react-native'

let url
if (__DEV__) {
  url = 'http://e1541773815c.ngrok.io' // ngrok url expires every 2 hours, when it does the ngrok instance needs to be relaunched
} else {
  url = 'https://sleepy-savannah-10606.herokuapp.com'
}

const instance = axios.create({
  baseURL: url,
})

// instance.interceptors.request.use(
//   async (config) => {
//     const token = await AsyncStorage.getItem('token')
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`
//     }
//     return config
//   },
//   (err) => {
//     return Promise.reject(err)
//   }
// )

export default instance
