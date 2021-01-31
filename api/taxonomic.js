import { post } from '@/http/request'
const prefix = '/itapi';


const apiTaxonomicYoulike = (params) => {
    return post(`${prefix}/taxonomic/youlike`, params, { loca: true })
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