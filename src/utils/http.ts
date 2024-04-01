import axios, { type AxiosRequestConfig } from 'axios'

const defaultConfig = {
  timeout: 5000,
  baseUrl: ''
}

class Http {
  constructor () {
    console.log('http constructor')
    this.httpInterceptorsRequest()
    this.httpInterceptorsResponse()
  }

  private static readonly axiosInstance = axios.create(defaultConfig)

  private httpInterceptorsRequest (): void {
    // 请求拦截
    Http.axiosInstance.interceptors.request.use((config) => {
      return config
    }, async error => {
      return await Promise.reject(error)
    })
  }

  private httpInterceptorsResponse (): void {
    // 响应拦截
    Http.axiosInstance.interceptors.response.use((response) => {
      return response
    }, async error => {
      return await Promise.reject(error)
    })
  }

  // 封装请求
  public async httpRequestGet<T> (url: string, params: AxiosRequestConfig): Promise<T> {
    return await Http.axiosInstance.get(url, params)
      .then(res => res.data)
      .catch()
  }

  public async httpRequestPost<T> (url: string, params: AxiosRequestConfig): Promise<T> {
    return await Http.axiosInstance.post(url, params)
      .then(res => res.data)
      .catch()
  }
}

export const http = new Http()
