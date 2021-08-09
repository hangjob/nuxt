import { post } from '@/http/request'
const prefix = '/itapi';

const apiSpecialList = (params) => {
    return post(`${prefix}/special/list`, params)
}

const apiSpecialListids = (params) => {
    return post(`${prefix}/special/listids`, params)
}

const apiSpecialSpecialNav = (params) => {
    return post(`${prefix}/special/detailNav`, params)
}

export {
    apiSpecialListids,
    apiSpecialList,
    apiSpecialSpecialNav
}