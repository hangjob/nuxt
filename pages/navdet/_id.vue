<template>
    <div class="navdet">
        <Header />
        <div class="wp clearfix">
            <info :detail="detail" />
            <study :detail="detail" />
            <recommend :detail="detail" />
            <paged :transmit="transmit" />
            <div class="animatepln">
                <h3>动画</h3>
                <div class="animatepln-item">
                    <animationEmotion />
                    <animationHouse />
                    <animationPinwheel />
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import paged from '@/web/navdet/paged'
import info from '@/web/navdet/info'
import study from '@/web/navdet/study'
import recommend from '@/web/navdet/recommend'
import animationEmotion from '@/animation/emotion/index.vue'
import animationHouse from '@/animation/house/index.vue'
import animationPinwheel from '@/animation/pinwheel/index.vue'
import { apiNavtagDetail } from '@/api/thread'
export default {
    components: {
        paged,
        info,
        study,
        recommend,
        animationEmotion,
        animationHouse,
        animationPinwheel
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
        let obj = { pic: '', it_name: '全栈导航', describe: '凡间搜索-提供开发网址，设计网址，产品经理，视觉视觉，等各类工具，为了互联网用户提供优秀的网址导航', create_time: '2019-07-17 00:00:00', id: 1 };
        if (!res.data.prv) {
            res.data.prv = obj
        }
        if (!res.data.nxet) {
            res.data.nxet = obj
        }
        return {
            detail: res.data.detail,
            transmit: { prv: res.data.prv, nxet: res.data.nxet }
        }
    },
}
</script>
<style lang="less" scoped>
.navdet {
    .animatepln {
        display: flex;
        flex-direction: column;
        padding: 20px;
        margin-bottom: 50px;
        background-color: #fff;
        border-radius: 5px;
        h3 {
            position: relative;
            padding-bottom: 15px;
            background: #fff;
            display: flex;
            justify-content: space-between;
            line-height: 1;
            font-size: 18px;
            color: #545454;
        }
        &-item {
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>