import { post } from '@/http/request'
const prefix = '/itapi';

const apiNavthemeItems = (params) => {
    return post(`${prefix}/navtheme/items`, params)
}

// 详情
const apiNavthemeDetail = (params) => {
    return post(`${prefix}/navtheme/detail`, params)
}


const apiNavthemeNewest = (params) => {
    return post(`${prefix}/navtheme/newest`, params)
}




export {
    apiNavthemeItems,
    apiNavthemeDetail,
    apiNavthemeNewest
}