<template>
    <div class="wechat-detail">
        <Header />
        <div class="wp clearfix">
            <WechatInfo :detail="detailData" />
            <Detail :detail="detailData" keyName="ArticleContentWithTags"></Detail>
        </div>
        <Footer />
    </div>
</template>
<script>
import Detail from '@/web/thread/Detail'
import WechatInfo from '@/web/wechat/WechatInfo'
import { apiWxcontentDetail } from '@/api/wechat'
export default {
    components: {
        Detail,
        WechatInfo
    },
    async asyncData({ $axios, app, store, params }) {
        const detailData = await apiWxcontentDetail();
        return {
            detailData: detailData.data
        }
    },
}
</script>
<style lang="less" scoped>
.wechat-detail {
}
</style>