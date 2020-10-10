<template>
    <div>
        <Header />
        <span>{{$store.state.counter}}</span>
        <span>{{msg}}</span>
        <el-button @click="add">测试</el-button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import axios from 'axios';
export default {
    layout: 'theme_one',
    data() {
        return {
            msg: ''
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
            this.$notify({content: '我是一个消息'});
            this.$store.commit('increment');
        }
    }
}
</script>

<style lang="less" scoped>
span {
    color: @color-success;
}
</style>>
