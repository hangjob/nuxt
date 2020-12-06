<template>
    <div class="category">
        <Header />
        <Topbg :detail="detail.info"/>
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
export default {
    components: {
        Topbg,
        Pagelist,
        MainRight
    },
    async asyncData({ $axios, app, store, params }) {
        let id = params.id ? params.id : 1;
        return Promise.all([
            $axios.post(app.$api.loginUserinfo),
            $axios.post(app.$api.taxonomicItems(id)),
            $axios.post(app.$api.wxarticleCorrelation)
        ]).then((res) => {
                    const userInfo = res[0];
                    const detail = res[1];
                    const detailObject = res[2];
                    store.commit('setUserInfo', userInfo.data)
                    return {
                        userInfo: userInfo.data,
                        detail: detail.data,
                        detailObject: detailObject.data
                    }
                }).catch((err) => {
                    console.log(err)
                })
    },
}
</script>
<style lang="less" scoped>
.category {
}
</style>