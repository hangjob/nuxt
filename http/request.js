import axios from 'axios';
import { handLastUrl, baseUrl } from '@/config/base'

const http = axios.create({
    baseURL: baseUrl(),
    timeout: 10000,
    withCredentials: true
})


// 请求拦截器
axios.interceptors.request.use(request => {
    return request;
}, error => {
    return Promise.reject(error);
});



const post = async(url, params) => {
    const res = await http.post(handLastUrl(url), params);
    return res.data;
}


const get = async(url, params) => {
    const res = await http.get((handLastUrl(url)), params)
    return res.data;
}


export {
    post,
    get,
    axios
}