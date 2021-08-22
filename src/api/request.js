import axios from 'axios'
let baseURL = '/api'
if (process.env.NODE_ENV === 'production') {
  baseURL = 'https://id.tlab.fun/api'
}
const service = axios.create({
  baseURL,
  timeout: 15 * 1000,
  method: 'GET'
})

service.interceptors.request.use(config => {
  return config
}, err => {
  return Promise.reject(err)
})

service.interceptors.response.use(response => {
  if (response.data.size) { 
    return response.data
  }
  if (response.data.code === 200) {
    return response.data
  } else {
    return Promise.reject(new Error(response.data.message))
  }
}, err => {
  return Promise.reject(err)
})

export default service