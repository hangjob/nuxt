import axios from 'axios'

axios.defaults.baseURL = '/api/itapi'

// 请求拦截
axios.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截
axios.interceptors.response.use(
    response => {
        return response.data
    },
    error => {
        return Promise.reject(error)
    }
)

const post = (url, params) => {
    return new Promise((resolve, reject) => {
        console.log(url)
        axios.post(url, params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                console.log(err)
            })
    });
}

export {
    post
};