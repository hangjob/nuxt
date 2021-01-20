import { post } from '@/http/request'
const prefix = '/itapi';

const apiDiscussAddlike = (params) => {
    return post('itapi/navtag/addlike', params)
}

// 首页列表
const apiNavtagItems = (params) => {
    return post(`${prefix}/navtag/items`, params)
}


// 数量
const apiConfigurationNavcount = (params) => {
    return post(`${prefix}/configuration/navcount`, params)
}


// 热门网站
const apiNavtagPopularIt = (params) => {
    return post(`${prefix}/navtag/popularIt`, params)
}

// 每日推荐
const apiNactagDaily = (params) => {
    return post(`${prefix}/navtag/daily`, params)
}

// 精选
const apiNactagCategory = (params) => {
    return post(`${prefix}/navtag/category`, params)
}

export {
    apiDiscussAddlike,
    apiNavtagItems,
    apiConfigurationNavcount,
    apiNavtagPopularIt,
    apiNactagDaily,
    apiNactagCategory
}