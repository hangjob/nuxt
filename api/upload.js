import { axios } from '@/http/request'

const apiUploadUpimage = (params) => {
    return axios.post(`/imgapi/api/api/upload/upimage`, params, { headers: { "Content-Type": "multipart/form-data" } })
}


export {
    apiUploadUpimage
}