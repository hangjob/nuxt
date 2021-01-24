<template>
    <div class="aritcle-detail">
        <Header />
        <div class="wp clearfix">
            <div class="site_content">
                <h2>{{detail.title}}</h2>
                <div class="site_tag">
                    <span>作者：{{detail.member.username}}</span>
                    <span>浏览次数：{{detail.hits}}</span>
                    <span>发布时间：{{detail.create_time}}</span>
                </div>
            </div>
            <Detail :detail="detail" keyName="content"></Detail>
        </div>
        <Footer />
    </div>
</template>
<script>
import { apiNavthemeDetail } from '@/api/navtheme'
import Detail from '@/web/thread/Detail'
export default {
    components: {
        Detail
    },
    async asyncData({ $axios, app, store, params }) {
        const res = await apiNavthemeDetail({ id: params.id });
        return {
            detail: res.data,
        }
    },
    mounted() {
        console.log(this.detail)
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