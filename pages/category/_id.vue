<template>
    <div class="category">
        <Header />
        <Topbg :detail="newest" />
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
import { apiNavthemeNewest } from '@/api/navtheme'
export default {
    components: {
        Topbg,
        Pagelist,
        MainRight
    },
    head() {
        return {
            title: this.detail.info.name,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.detail.info.des
                }
            ]
        }
    },
    async asyncData({ $axios, app, store, params }) {
        let id = params.id ? params.id : 1;
        const detail = await apiTaxonomicItems({ id });
        const detailObject = await apiWxarticleCorrelation();
        const newest = await apiNavthemeNewest();
        return {
            detail: detail.data,
            detailObject: detailObject.data,
            newest: newest
        }
    },
}
</script>
<style lang="less" scoped>
.category {
}
</style>