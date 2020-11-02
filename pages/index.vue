<template>
    <div>
        <Header />
        <MainBanner></MainBanner>
        <Toplove></Toplove>
        <div class="wp clearfix">
            <MainLeft style="float: left;"></MainLeft>
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
import axios from 'axios';
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
        }
    },
    mounted() {

        // this.$axios.post(`/api/v1/login/userinfo`).then(res => {
        //     this.msg = '测试异步数据1'
        // })
    },
    async asyncData({ $axios, app }) {
        // const title = await $axios.post(`/api/v1/login/userinfo`)
        // return {
        //     title:'ssss'
        // }
    },
    methods: {
        add() {
            this.$notify({ content: '我是一个消息' });
            this.$store.commit('increment');
        },
        formatDate(date) {
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en-US', options)
        }
    }
}
</script>

<style lang="less" scoped>
span {
    color: @color-success;
}
</style>>
