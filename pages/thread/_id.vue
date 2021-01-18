<template>
    <div class="thread">
        <Header />
        <Banner />
        <UserInfo :detail="detail" />
        <Detail :detail="detail" />
        <Like :detail="detail" />
        <Statement />
        <SpaceSwiper />
        <Folder :taxonomic="detail.taxonomic" />
        <Comment />
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
import { apiNavtagDetail } from '@/api/thread'
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
    async asyncData({ $axios, app, store, params }) {
        const detail = await apiNavtagDetail({ id: params.id });
        return {
            detail: detail.data
        }
    },
}
</script>
<style lang="less" scoped>
.thread {
}
</style>