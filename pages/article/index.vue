<template>
    <div class="article">
        <Header />
        <PageTop/>
        <div class="wp clearfix">
            <ArticleBanner></ArticleBanner>
            <ArticleKuai :total="total" @apiNavthemeItems="apiNavthemeItems" :listData="listData" />
        </div>
        <Footer />
    </div>
</template>
<script>
import ArticleBanner from '@/web/article/ArticleBanner'
import ArticleKuai from '@/web/article/ArticleKuai'
import { apiNavthemeItems } from '@/api/navtheme'
import PageTop from '@/web/article/PageTop'
export default {
    components: {
        ArticleKuai,
        ArticleBanner,
        PageTop
    },
    async asyncData({ $axios, app, store }) {
        const listData = await apiNavthemeItems();
        return {
            listData: listData.data,
            total: listData.data.total
        }
    },
    methods: {
        async apiNavthemeItems({ page }) {
            const listData = await apiNavthemeItems({ page: page })
            this.listData = listData.data;
            this.total = listData.data.total;
        }
    }
}
</script>
<style lang="less" scoped>
.article {
}
</style>