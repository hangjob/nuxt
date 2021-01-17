<template>
    <div class="article">
        <Header />
        <div class="wp clearfix">
            <ArticleBanner></ArticleBanner>
            <ArticleKuai :listData="listData.data" />
        </div>
        <Footer />
    </div>
</template>
<script>
import ArticleBanner from '@/web/article/ArticleBanner'
import ArticleKuai from '@/web/article/ArticleKuai'
import { apiWxcontentItems } from '@/api/wechat'
export default {
    components: {
        ArticleKuai,
        ArticleBanner
    },
    async asyncData({ $axios, app, store }) {
        const listData = await apiWxcontentItems();
        return {
            listData: listData.data
        }
    },
}
</script>
<style lang="less" scoped>
.article {
}
</style>