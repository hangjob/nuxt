<template>
    <div class="main-right">
        <div class="right-join">
            <div class="join-top">
                <img src="@/assets/images/logo-44.png" alt />
                <h1>全栈导航</h1>
            </div>
            <div class="join-slogan">
                <p>
                    全栈导航一个分享互联网优秀资源的导航网站，专注分享产品运营、产品经理、UI设计师、前端开发工程师、后端开发工程师，为互联网职员收录国内外优质网站。互联网职员，找导航，就上
                    <a>全栈导航</a>
                </p>
            </div>
            <div class="join-action">
                <a href="https://www.vipbic.com/weixin.html" target="_blank">订阅公众号</a>
                <a target="_blank" href="/write" class>写点什么</a>
            </div>
        </div>
        <div class="right-activity">
            <a :href="item.url" target="_blank" v-for="item in items" :key="item.id">
                <img :src="item.img" :alt="item.kl" />
            </a>
        </div>
        <Tags></Tags>
    </div>
</template>
<script>
import Tags from './components/Tags'
import { apiTaobaoItems } from '@/api/taobao'
export default {
    components: {
        Tags
    },
    data() {
        return {
            items: []
        }
    },
    created() {
        this.apiTaobaoItems();
    },
    methods: {
        apiTaobaoItems() {
            apiTaobaoItems().then((res) => {
                this.items = res.data;
            })
        }
    }
}
</script>
<style lang="less" scoped>
.main-right {
    margin-top: 20px;
    width: 410px;
    .right-join {
        background: #fff;
        border-radius: 6px;
        min-height: 30px;
        height: 100%;
        position: relative;
        margin-bottom: 20px;
        min-height: 100px;
        border-top: 2px solid #f9be00;
        .join-top {
            display: flex;
            padding: 10px 15px;
            box-shadow: none;
            border-radius: 0;
            align-items: center;

            border-bottom: 1px solid rgba(34, 36, 38, 0.1);
            img {
                width: 45px;
                border-radius: 5px;
                margin-right: 10px;
                cursor: pointer;
            }
            h1 {
                font-size: 16px;
                font-weight: 500;
                color: #777;
            }
        }
        .join-slogan {
            padding: 15px;
            p {
                color: #777;
                font-size: 13px;
                line-height: 25px;
                letter-spacing: 1px;
                opacity: 0.7;
                text-align: justify;
            }
        }
        .join-action {
            display: flex;
            justify-content: space-around;
            padding: 15px 10px;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
            a {
                display: inline-block;
                text-align: center;
                padding: 10px 30px;
                border: 1px solid rgba(0, 0, 0, 0.05);
                border-radius: 5px;
                color: #777;
                transition: all 0.3s;
                &:hover {
                    color: #fff;
                    background-color: #f56c6c;
                }
            }
        }
    }
    .right-activity {
        a {
            display: block;
            margin-bottom: 10px;
            img {
                width: 100%;
                height: 130px;
                object-fit: cover;
                border-radius: 6px;
            }
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>