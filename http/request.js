import axios from 'axios';
import { handLastUrl } from '@/config/base'

const http = axios.create({
    baseURL: '/api',
    timeout: 10000,
    withCredentials: true
});

// 请求拦截
http.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截
http.interceptors.response.use(
    response => {
        if (response) {
            if (response.data.code === 1) {
                return response.data
            } else {
                return Promise.reject(response.data)
            }
        }
    },
    error => {
        return Promise.reject(error)
    }
)


const post = (url, params) => {
    return new Promise((resolve, reject) => {
        http.post(handLastUrl(url), params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    });
}

export {
    post,
    axios
};