import { post } from '@/http/request'

const prefix = '/itapi';

const apiTaxonomicItems = (params) => {
    return post(`${prefix}/taxonomic/items?id=${params.id}`, params)
}

const apiWxarticleCorrelation = (params) => {
    return post(`${prefix}/wxarticle/correlation`, params)
}


export {
    apiTaxonomicItems,
    apiWxarticleCorrelation
}