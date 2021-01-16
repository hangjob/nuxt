import { post } from '@/http/request'

const prefix = '/itapi';

const apiNavtagDetail = (params) => {
    return post(`${prefix}/navtag/detail`, params)
}


export {
    apiNavtagDetail
}