<template>
    <div class="wechat">
        <Header />
        <div class="wp clearfix">
            <WechatBanner></WechatBanner>
            <WechatKuai/>
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
    }
}
</script>
<style lang="less" scoped>
.wechat{
    
}
</style>