<template>
    <div class="thread">
        <Header />
        <Banner />
        <UserInfo />
        <Detail :content="detailContent" />
        <Like/>
        <Statement/>
        <SpaceSwiper/>
        <Folder/>
        <Comment/>
        <Footer />
    </div>
</template>
<script>
import Banner from '@/web/thread/Banner'
import UserInfo from '@/web/thread/UserInfo'
import Detail from '@/web/thread/Detail'
import Like from '@/web/thread/Like'
import Statement from '@/web/thread/Statement'
import SpaceSwiper from '@/web/components/SpaceSwiper'
import Folder from '@/web/thread/Folder'
import Comment from '@/web/components/Comment'
export default {
    components: {
        Banner,
        UserInfo,
        Detail,
        Like,
        Statement,
        SpaceSwiper,
        Folder,
        Comment
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