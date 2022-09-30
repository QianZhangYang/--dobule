import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})
// const timeOut = 1
// function checkOutTime() {
//   const nowtime = +new Date()
//   const currtime = (nowtime - store.getters.hasserTime) / 1000
//   return currtime > timeOut
// }
request.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    if (store.getters.token) {
      console.log(1)
      // if (checkOutTime) return
      config.headers.Authorization = `Bearer ${store.getters.token}`
    }
    return config
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截
// request.interceptors.response.use(
//   function(response) {
//     // 2xx 范围内的状态码都会触发该函数。
//     // 对响应数据做点什么
//     console.log(response)
//     // const { message, data, success } = response.
//     //   if(successs){
//     //   return data
//     // }
//     return response
//   },
//   function(error) {
//     // 超出 2xx 范围的状态码都会触发该函数。
//     // // 对响应错误做点什么
//     // if (error.response.status === 401) {
//     //   // 退出 重设token
//     // }
//     return Promise.reject(error)
//   }
// )
request.interceptors.response.use(
  (result) => {
    console.log(result)
    const { success, data, message } = result.data
    if (success) {
      return data
    } else {
      Message.error(message)
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    console.log('发生错误了')
    Message.error(error.message)
    return Promise.reject(error)
  }
)
export default request
