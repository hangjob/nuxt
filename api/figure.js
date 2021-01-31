import Vue from 'vue';
import { post } from '@/http/request'
const apiFigureItems = (params) => {
    return post('itapi/figure/items', params)
}

const apiFigureBans = (params) => {
    return post('itapi/figure/bans', params, { loca: true })
}

export {
    apiFigureItems,
    apiFigureBans
}