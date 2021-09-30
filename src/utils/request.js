import axios from 'axios'

console.info('BASE_API', process.env.VUE_APP_BASE_API)

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 50000, // request timeout
  // headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  withCredentials: true
})

// request拦截器
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    if (!response.data || response.data.code === undefined) {
      return response
    }

    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
