import { post } from '@/http/request'
const prefix = '/itapi';


const apiTaxonomicYoulike = (params) => {
    return post(`${prefix}/taxonomic/youlike`, params)
}

export {
    apiTaxonomicYoulike,
}