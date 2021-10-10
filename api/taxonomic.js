import { post, get } from '@/http/request'
const prefix = '/itapi';


const apiTaxonomicYoulike = (params) => {
    return get(`${prefix}/taxonomic/youlike?id=${params.id}`, params, { loca: true })
}


const apiTaxonomicTypes = (params) => {
    return post(`${prefix}/taxonomic/types`, params)
}


const apiPrimaryTypes = (params) => {
    return post(`${prefix}/primary/types`, params)
}

export {
    apiTaxonomicYoulike,
    apiTaxonomicTypes,
    apiPrimaryTypes
}