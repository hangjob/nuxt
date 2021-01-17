import { post } from '@/http/request'

const prefix = '/itapi';

const apiWxcontentDetail = (params) => {
    return post(`${prefix}/wxcontent/detail`, params)
}


const apiWxcontentItems = (params) => {
    return post(`${prefix}/wxcontent/items?page=1`, params)
}



export {
    apiWxcontentDetail,
    apiWxcontentItems
}