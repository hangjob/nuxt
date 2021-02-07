<template>
    <div class="hot">
        <Header />
        <Banner />
        <Special />
        <div class="wp clearfix">
            <div class="container">
                <software :items="items" />
                <navlist :items="downTheme" />
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import software from '@/web/hot/software'
import navlist from '@/web/hot/navlist'
import Banner from '@/web/hot/banner'
import Special from '@/web/hot/special'
import { apiAppdownloadItems, apiAppdownloadRanking } from '@/api/appdownload'
const processData = (arr) => {
    arr.forEach(item => {
        item.isArticle = true;
        item.des = item.describe;
        item.name = item.title;
    });
    return arr;
}
export default {
    components: {
        software,
        navlist,
        Banner,
        Special
    },
    head() {
        return {
            script: [
                { src: 'https://www.vipbic.com/public/static/superslide/superslide.2.1.js' }
            ]
        }
    },
    data() {
        return {

        }
    },
    mounted() {

    },
    async asyncData({ $axios, app, store, params }) {
        const res = await apiAppdownloadItems();
        const res2 = await apiAppdownloadRanking();
        let arr = []
        arr.push(...res2.data.down);
        let article = processData(res2.data.theme);
        arr.push(...article);
        return {
            items: res.data,
            downTheme: arr
        }
    },
}
</script>
<style lang="less" scoped>
.hot {
    .container {
        display: flex;
        flex-direction: column;
    }
}
</style>