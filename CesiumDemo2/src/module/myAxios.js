import axios from 'axios'

const baseURL ='/api'
const http = axios.create({ baseURL: baseURL })
//自定义请求头参数 后面记得设置全局

// 请求拦截器
http.interceptors.request.use(
  config => {
    // config.headers.umcRequestUserName = 9117436
    config.headers['umc-request-user-name'] = 9117436
    return config
  },
  error => {
  	return Promise.reject(error)
  }
)

// 响应拦截器
http.interceptors.response.use(
  response => {
    // 异常返回
    if (response.data.code !== '200') {
    //   ElMessage({
    //     message: response.data.message,
    //     type: 'error',
    //     duration: 4000
    //   })
    console.log(response.data.message)
    }
    return response.data
  },
  error => {
    console.log( error.message)
    return Promise.reject(error)
  }
)

export default http
