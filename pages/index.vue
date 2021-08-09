<template>
    <div>
        <Header />
        <MainBanner></MainBanner>
        <Toplove></Toplove>
        <div class="wp clearfix">
            <MainLeft
                :listData="listData"
                style="float: left;"
                :total="total"
                @apiNavtagItems="apiNavtagItems"
                :specialData="specialData"
            ></MainLeft>
            <MainRight style="float: right;"></MainRight>
        </div>
        <Footer />
    </div>
</template>

<script>
import MainLeft from '@/web/index/MainLeft'
import MainRight from '@/web/index/MainRight'
import MainBanner from '@/web/components/MainBanner'
import { mapMutations } from 'vuex'
import Toplove from '@/web/components/Toplove'
import { apiNavtagItems } from '@/api/index'
import { apiSpecialList } from '@/api/special'

export default {
    layout: 'theme_one',
    components: {
        MainLeft,
        MainBanner,
        Toplove,
        MainRight
    },
    data() {
        return {
            msg: '',
            page: 1
        }
    },
    computed: {

    },
    mounted() {

    },
    async asyncData({ store }) {
        const listData = await apiNavtagItems({ page: 1 });
        const specialData = await apiSpecialList();
        specialData.data.push({name:'更多专题',icon:require('@/assets/chahua/5.jpg')})
        return {
            listData: listData.data,
            total: listData.data.total,
            specialData: specialData.data
        }
    },
    methods: {
        add() {
            this.$notify({ content: '我是一个消息' });
        },
        formatDate(date) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en-US', options)
        },
        async apiNavtagItems({ page }) {
            const listData = await apiNavtagItems({ page: page })
            this.listData = listData.data;
            this.total = listData.data.total;
        }
    }
}
</script>

<style lang="less" scoped>
span {
    color: @color-success;
}
</style>>
