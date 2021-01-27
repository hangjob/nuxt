<template>
    <div class="thread">
        <Header />
        <Banner />
        <!-- <UserInfo :detail="detail" /> -->
        <Detail :detail="detail" :alldetails="alldetails" />
        <!-- <Like :detail="detail" /> -->
        <!-- <Statement /> -->
        <SpaceSwiper />
        <Folder :items="taxonomicItems" />
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
import { apiTaxonomicYoulike } from '@/api/taxonomic'
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
    head() {
        return {
            title: this.detail.it_name,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.detail.describe
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.detail.keywords.join(',')
                }
            ]
        }
    },
    async asyncData({ $axios, app, store, params }) {
        const res = await apiNavtagDetail({ id: params.id });
        const res2 = await apiTaxonomicYoulike({ id: res.data.detail.taxonomic.parentid })
        return {
            detail: res.data.detail,
            alldetails:res.data,
            taxonomicItems: res2.data
        }
    },
}
</script>
<style lang="less" scoped>
.thread {
}
</style>