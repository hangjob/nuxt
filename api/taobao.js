import { post } from '@/http/request'
const prefix = '/itapi';

// 推广列表
const apiTaobaoItems = (params) => {
    return post(`${prefix}/taobao/items`, params, { loca: true })
}

export {
    apiTaobaoItems,
}