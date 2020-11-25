import axios from 'axios'

axios.defaults.baseURL = '/api/itapi'

axios.defaults.timeout = 20000;
axios.defaults.withCredentials = true; // 携带cookie
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

const handLastUrl = (url) => {
    return `${url}.html`
}

const post = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.post(handLastUrl(url), params)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    });
}

export {
    post
};