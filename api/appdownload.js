import { post } from '@/http/request'
const prefix = '/itapi';

const apiAppdownloadItems = (params) => {
    return post(`${prefix}/appdownload/items`, params)
}

const apiAppdownloadRanking = (params) => {
    return post(`${prefix}/appdownload/ranking`, params)
}

export {
    apiAppdownloadItems,
    apiAppdownloadRanking
}