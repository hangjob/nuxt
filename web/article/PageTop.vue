<template>
    <div class="pagetop">
        <div class="pagetop-container">
            <div class="wp content">
                <div class="title">
                    <h1>互联网职员，找导航，就上 全栈导航</h1>
                </div>
                <div class="search clearfix">
                    <input
                        v-model="ks"
                        @keyup.enter="handleSearch"
                        type="text"
                        placeholder="在「文章」中搜索"
                    />
                    <button @click="handleSearch">搜索</button>
                </div>
                <div class="kys">
                    <nuxt-link
                        :to="`/search?ks=${item}`"
                        v-for="(item,index) in keywords"
                        :key="index"
                    >{{item}}</nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { keywords } from '@/utils/keywords'
export default {
    data() {
        return {
            keywords: keywords,
            ks: ''
        }
    },
    methods: {
        handleSearch() {
            if (this.$utils.delHtmlTagTrim(this.ks) == '') {
                this.$notify({
                    title: '提示信息',
                    message: `小可爱，检查输入有误`,
                    type: 'warning'
                });
            } else {
                this.$router.push({ path: '/search', query: { ks: this.ks } })
            }
        }
    }
}
</script>
<style lang="less" scoped>
@-webkit-keyframes gradient {
    50% {
        background-position: 100% 0;
    }
}
@keyframes gradient {
    50% {
        background-position: 100% 0;
    }
}
.pagetop {
    height: 500px;
    background: #0299d8;
    background-image: linear-gradient(
        45deg,
        #f2c94c 0%,
        #96c93d 33%,
        #00b09b 66%,
        #f56c6c 100%
    );
    background-size: 400%;
    background-position: 0% 100%;
    animation: gradient 7.5s ease-in-out infinite;
    margin-top: -10px;
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 500px;
        justify-content: center;
    }
    h1 {
        font-family: webfontx;
        color: rgb(255, 255, 255);
        font-size: 40px;
        text-align: center;
        margin-bottom: 50px;
    }
    .search {
        display: flex;
        justify-content: center;

        input {
            clear: both;
            position: relative;
            float: left;
            padding-left: 16px;
            width: 850px;
            height: 50px;
            line-height: 50px;
            background-color: #fff;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;
            z-index: 3;
            font-size: 14px;
            border: 1px solid #fff;
        }
        button {
            float: left;
            width: 100px;
            height: 50px;
            font-size: 18px;
            font-weight: 700;
            color: #fff;
            background-color: #ffd100;
            cursor: pointer;
            border: none;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            outline: none;
            &:active {
                border: none;
            }
        }
    }
    .kys {
        width: 950px;
        margin: 0 auto;
        margin-top: 30px;
        text-align: center;
        a {
            display: inline-block;
            white-space: nowrap;
            background-color: #fafafa;
            padding: 6px 14px;
            margin-right: 10px;
            margin-bottom: 10px;
            font-size: 14px;
            line-height: 14px;
            color: #9a9a9a;
            cursor: pointer;
            border-radius: 4px;
        }
    }
}
</style>