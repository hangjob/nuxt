<template>
    <div class="thread">
        <Header />
        <Banner />
        <UserInfo :detail="detail"/>
        <Detail :detail="detail" />
        <Like :detail="detail"/>
        <Statement />
        <SpaceSwiper />
        <Folder />
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
    mounted() {
        console.log(this.detail)
    },
    async fetch({ $axios, store, app }) {
        return $axios.post(app.$api.loginUserinfo).then((res) => {
            store.commit('setUserInfo', res.data)
            return {
                userInfo: res.data,
            }
        }).catch((err) => {

        })
    },
    async asyncData({ $axios, app, store, params }) {
        return $axios.post(app.$api.navtagDetail(params.id)).then((res) => {
            return {
                detail: res.data
            }
        }).catch((err) => {

        })
    },
}
</script>
<style lang="less" scoped>
.thread {
}
</style>