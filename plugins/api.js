import Vue from 'vue'

import { handLastUrl } from '@/config/base'

let host = 'http://127.0.0.1:8000/';

const api = {
    loginUserinfo: host + handLastUrl('itapi/login/userinfo'),
    navtagDetail: (id) => {
        return host + handLastUrl(`itapi/navtag/detail/${id}`)
    },
    navtagItems: (page) => {
        return host + handLastUrl(`itapi/navtag/items`) + `?page=${page}`
    }
}


Vue.use({
    install(Vue) {
        Vue.prototype.$api = api;
    }
})
export default ({ $axios, app }, inject) => {
    app.$api = api;
}