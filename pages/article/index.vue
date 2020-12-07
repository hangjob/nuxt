<template>
    <div class="article">
        <Header />
        <div class="wp clearfix">
            <ArticleBanner></ArticleBanner>
            <ArticleKuai :listData="listData.data"/>
        </div>
        <Footer />
    </div>
</template>
<script>
import ArticleBanner from '@/web/article/ArticleBanner'
import ArticleKuai from '@/web/article/ArticleKuai'
export default {
    components: {
        ArticleKuai,
        ArticleBanner
    },
    async asyncData({ $axios, app, store }) {
        return Promise.all([$axios.post(app.$api.loginUserinfo), $axios.post(app.$api.wxcontentItems(1))]).then((res) => {
            const userInfo = res[0];
            const listData = res[1];
            store.commit('setUserInfo', userInfo.data)
            return {
                userInfo: userInfo.data,
                listData: listData.data
            }
        }).catch((err) => {
            console.log(err)
        })
    },
}
</script>
<style lang="less" scoped>
.article{
    
}
</style>