<template>
    <nuxt-link class="article-item" :to="`/article/${detail.id}`">
        <div class="post-card">
            <div
                class="blog-background"
                :style="`background-image: url(${detail.pic})`"
            ></div>
            <div class="post-card-mask">
                <div class="post-card-container">
                    <h2 class="post-card-title" itemprop="headline">{{detail.title}}</h2>
                    <div class="post-card-info">
                        <span>全栈导航・</span>
                        <span>{{$dayjs(detail.create_time).format('YYYY年 MM月 DD日')}}・</span>
                        <span>{{detail.describe}}</span>
                    </div>
                </div>
            </div>
        </div>
    </nuxt-link>
</template>
<script>
export default {
    props: {
        detail: {
            type: Object,
            default: () => { }
        }
    },
}
</script>
<style lang="less" scoped>
.article-item {
    border-radius: 6px;
    overflow: hidden;
    background: #fff no-repeat center;
    background-size: cover;
    position: relative;
    transition: 0.3s ease all;
    margin-bottom: 40px;
    display: block;
    .blog-background {
        display: block;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        opacity: 1;
        transition: 1s ease opacity;
    }
    .post-card-mask {
        background: rgba(0, 0, 0, 0.25);
        position: relative;
        z-index: 10;
        display: table;
        vertical-align: middle;
        width: 100%;
        height: 280px;

        .post-card-container {
            .post-card-title{
                font-size: 20px;
            }
            .post-card-info{
                color: #eee;
            }
            padding: 2rem 2rem;
            text-align: center;
            display: table-cell;
            width: 100%;
            height: 100%;
            vertical-align: middle;
            color: #fff;
        }
    }
}
</style>