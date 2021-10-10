import { post, get } from '@/http/request'
const prefix = '/itapi';

const apiNavthemeItems = (params) => {
    return post(`${prefix}/navtheme/items`, params)
}

// 详情
const apiNavthemeDetail = (params) => {
    return get(`${prefix}/navtheme/detail?id=${params.id}`, params)
}


const apiNavthemeNewest = (params) => {
    return post(`${prefix}/navtheme/newest`, params)
}




export {
    apiNavthemeItems,
    apiNavthemeDetail,
    apiNavthemeNewest
}