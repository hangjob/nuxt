import { post } from '@/http/request'
const prefix = '/itapi';

const apiLeaveAdd = (params) => {
    return post(`${prefix}/leave/add`, params)
}

const apiLeaveItems = (params) => {
    return post(`${prefix}/leave/items`, params)
}

export {
    apiLeaveAdd,
    apiLeaveItems
}