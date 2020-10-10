import axios from 'axios'

const http = axios.create({
    baseURL: '/api/',
    withCredentials: true,
    timeout: 10000
})


// 请求拦截
http.interceptors.request.use(
    config => {
        return config
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

// 响应拦截
http.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

export default http;