<template>
    <div class="category">
        <Header />
        <Topbg :detail="detail.info" />
        <div class="wp clearfix">
            <Pagelist :listData="detail.items" style="float: left;" />
            <MainRight :detailObject="detailObject" style="float: right;" />
        </div>
        <Footer />
    </div>
</template>
<script>
import Topbg from '@/web/category/Topbg'
import Pagelist from '@/web/category/Pagelist'
import MainRight from '@/web/category/MainRight'
import { apiTaxonomicItems, apiWxarticleCorrelation } from '@/api/category'
export default {
    components: {
        Topbg,
        Pagelist,
        MainRight
    },
    async asyncData({ $axios, app, store, params }) {
        let id = params.id ? params.id : 1;
        const detail = await apiTaxonomicItems({ id });
        const detailObject = await apiWxarticleCorrelation();
        return {
            detail: detail.data,
            detailObject: detailObject.data
        }
    },
}
</script>
<style lang="less" scoped>
.category {
}
</style>