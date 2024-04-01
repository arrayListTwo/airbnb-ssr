import axios from 'axios'

const defaultConfig = {
  timeout: 5000,
  baseUrl: ''
}

const axiosInstance = axios.create(defaultConfig)

// 请求拦截
axiosInstance.interceptors.request.use(config => {
  return config
}, async error => {
  return await Promise.reject(error)
})

// 响应拦截
axiosInstance.interceptors.response.use(config => {
  return config
}, async error => {
  return await Promise.reject(error)
})

// 封装请求
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function httpRequestGet (url: string, params: object) {
  return await axiosInstance.get(url, params)
    .then(res => res.data)
    .catch()
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function httpRequestPost (url: string, params: object) {
  return await axiosInstance.post(url, params)
    .then(res => res.data)
    .catch()
}

export default {
  httpRequestGet,
  httpRequestPost
}
