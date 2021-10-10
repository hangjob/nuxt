import { post, get } from '@/http/request'

const prefix = '/itapi';

const apiNavtagDetail = (params) => {
    return get(`${prefix}/navtag/detail?id=${params.id}`)
}


export {
    apiNavtagDetail
}