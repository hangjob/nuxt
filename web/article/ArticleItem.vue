<template>
    <a class="article-item" :href="`/wechat/${detail.id}`">
        <div class="post-card">
            <div
                class="blog-background"
                style="background-image: url(https://tvax1.sinaimg.cn/large/6f8a2832gy1gehwm4x5hbj21hc0u0qen.jpg)"
            ></div>
            <div class="post-card-mask">
                <div class="post-card-container">
                    <h2 class="post-card-title" itemprop="headline">{{detail.ArticleTitle}}</h2>
                    <div class="post-card-info">
                        <span>全栈导航・</span>
                        <span>{{$dayjs(detail.ArticlePublishDateTime).format('MM月DD日 YYYY年')}}・</span>
                        <span>{{detail.ArticleType}}</span>
                    </div>
                </div>
            </div>
        </div>
    </a>
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
        height: 250px;
        .post-card-container {
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