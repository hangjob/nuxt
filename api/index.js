import { post } from '@/http/request.js'

const apiDiscussAddlike = (params) => {
    return post('itapi/navtag/addlike', params)
}

export {
    apiDiscussAddlike
}