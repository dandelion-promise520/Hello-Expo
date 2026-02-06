import axios from 'axios'

export const request = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL, // 先随便写，后面再换
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

/* 请求拦截（现在不干任何事，留个口） */
request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => Promise.reject(error)
)

/* 响应拦截（直接返回 data） */
request.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.log('request error:', error)
    return Promise.reject(error)
  }
)
