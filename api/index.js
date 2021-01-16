import { post } from '@/http/request'
const prefix = '/itapi';

const apiDiscussAddlike = (params) => {
    return post('itapi/navtag/addlike', params)
}

// 首页列表
const apiNavtagItems = (params) => {
    return post(`${prefix}/navtag/items`, params)
}

export {
    apiDiscussAddlike,
    apiNavtagItems
}