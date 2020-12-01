import { post } from '@/http/request.js'

const apiDiscussItems = (params) => {
    return post('itapi/discuss/items', params)
}

const apiDiscussAdd = (params) => {
    return post('itapi/discuss/add', params)
}
const apiDiscussAddRevert = (params) => {
    return post('itapi/discuss/addRevert', params)
}

export {
    apiDiscussItems,
    apiDiscussAdd,
    apiDiscussAddRevert
}