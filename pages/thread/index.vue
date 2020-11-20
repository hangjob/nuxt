<template>
    <div class="thread">
        <Header />
        <Banner />
        <UserInfo />
        <Detail :content="detailContent" />
        <Footer />
    </div>
</template>
<script>
import Banner from '@/web/thread/Banner'
import UserInfo from '@/web/thread/UserInfo'
import Detail from '@/web/thread/Detail'
export default {
    components: {
        Banner,
        UserInfo,
        Detail
    },
    async asyncData() {
        return {
            detailContent: '### 测试数据'+(+new Date())
        }
    }
}
</script>
<style lang="less" scoped>
.thread {
}
</style>