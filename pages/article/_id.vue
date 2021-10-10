<template>
    <div class="aritcle-detail">
        <Header />
        <div class="wp clearfix">
            <Detail :detail="detail"></Detail>
        </div>
        <Footer />
    </div>
</template>
<script>
import { apiNavthemeDetail } from '@/api/navtheme'
import Detail from '@/web/article/Detail'
export default {
    components:{
        Detail
    },
    async asyncData({ $axios, app, store, params,route }) {
        console.log('router',params.id);
        const res = await apiNavthemeDetail({ id: params.id });
        return {
            detail: res.data,
            params
        }
    },
    mounted() {
         setTimeout(() => {
            console.log('params', this.params)
            console.log('detail', this.detail)
        }, 3000)
    }
}
</script>
<style lang="less" scoped>
.aritcle-detail {
    .site_content {
        background-color: #fff;
        position: relative;
        padding: 22px 15px 0px 15px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        h2 {
            padding-bottom: 8px;
            font-size: 22px;
            font-weight: normal;
            line-height: 30px;
        }
        span {
            display: inline-block;
            margin-right: 5px;
            color: #333333;
        }
    }
}
</style>