<template>
    <div class="wechat">
        <Header />
        <div class="wp clearfix">
            <div class="list">
                <WechatItem class="list-item" />
                <WechatItem class="list-item" />
                <WechatItem class="list-item" />
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import WechatItem from '@/web/wechat/WechatItem'
export default {
    components: {
        WechatItem
    },
    async asyncData({ $axios, app, store }) {

    },
}
</script>
<style lang="less" scoped>
.wechat {
    .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &-item {
            width: 49.5%;
        }
    }
}
</style>