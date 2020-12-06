<template>
    <div class="wechat">
        <Header />
        <div class="wp clearfix">
            <WechatBanner></WechatBanner>
            <WechatKuai :listData="listData.data"/>
        </div>
        <Footer />
    </div>
</template>
<script>
import WechatBanner from '@/web/wechat/WechatBanner'
import WechatKuai from '@/web/wechat/WechatKuai'
export default {
    components: {
        WechatKuai,
        WechatBanner
    },
    async asyncData({ $axios, app, store }) {
        return Promise.all([$axios.post(app.$api.loginUserinfo), $axios.post(app.$api.wxcontentItems(1))]).then((res) => {
            const userInfo = res[0];
            const listData = res[1];
            store.commit('setUserInfo', userInfo.data)
            return {
                userInfo: userInfo.data,
                listData: listData.data
            }
        }).catch((err) => {
            console.log(err)
        })
    },
}
</script>
<style lang="less" scoped>
.wechat{
    
}
</style>