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



const post = async(url, params, hand = { loca: false }) => {
    if (process.server) {
        const res = await http.post(handLastUrl(url), params);
        return res.data;
    } else {
        let key = url.replace(/\//g, 'A');
        if (key && hand.loca && window[key]) {
            return window[key];
        }
        const res = await http.post(handLastUrl(url), params);
        if (hand.loca) {
            console.log(key);
            window[key] = res.data;
        }
        return res.data;
    }

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