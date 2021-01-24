<template>
    <div class="wechat">
        <Header />
        <div class="wp clearfix">
            <WechatBanner/>
            <div class="list">
                <WechatItem class="list-item" :detail="item" v-for="(item,index) in listData" :key="index"/>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import WechatItem from '@/web/wechat/WechatItem'
import WechatBanner from '@/web/wechat/WechatBanner'

export default {
    components: {
        WechatItem,
        WechatBanner
    },
    async asyncData({ $axios, app, store }) {
       
    },
    mounted() {
        
    }
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