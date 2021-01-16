<template>
    <div class="navdet">
        <Header />
        <div class="wp clearfix">
            <info :detail="detail" />
            <study :detail="detail" />
            <recommend :detail="detail" />
            <paged :detail="detail" />
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
    async asyncData({ $axios, app, store, params }) {
        const detail = await apiNavtagDetail({ id: params.id });
        return {
            detail: detail.data
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