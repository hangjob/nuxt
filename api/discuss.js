import { post } from '@/http/request.js'

const apiDiscussItems = (params) => {
    return post('itapi/discuss/items', params)
}

const apiDiscussAdd = (params) => {
    return post('itapi/discuss/add', params)
}

export {
    apiDiscussItems,
    apiDiscussAdd
}