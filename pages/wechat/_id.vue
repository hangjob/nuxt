<template>
    <div class="wechat-detail">
        <Header />
        <div class="wp clearfix">
            <WechatInfo :detail="detailData"/>
            <Detail :detail="detailData" keyName="ArticleContentWithTags"></Detail>
        </div>
        <Footer />
    </div>
</template>
<script>
import Detail from '@/web/thread/Detail'
import WechatInfo from '@/web/wechat/WechatInfo'
export default {
    components: {
        Detail,
        WechatInfo
    },
    async asyncData({ $axios, app, store, params }) {
        return Promise.all([
            $axios.post(app.$api.loginUserinfo),
            $axios.post(app.$api.wxcontentDetail(params.id))
        ]).then((res) => {
            const userInfo = res[0];
            const detailData = res[1];
            store.commit('setUserInfo', userInfo.data)
            return {
                userInfo: userInfo.data,
                detailData: detailData.data
            }
        }).catch((err) => {
            console.log(err)
        })
    },
}
</script>
<style lang="less" scoped>
.wechat-detail {
}
</style>