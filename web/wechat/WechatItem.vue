<template>
    <div class="wechat-item">
        <div class="post-card">
            <div
                class="blog-background"
                style="background-image: url(https://tvax1.sinaimg.cn/large/6f8a2832gy1gehwm4x5hbj21hc0u0qen.jpg)"
            ></div>
            <div class="post-card-mask">
                <div class="post-card-container">
                    <h2 class="post-card-title" itemprop="headline">赚钱靠上班，省钱靠上值值值！</h2>
                    <div class="post-card-info">
                        <span>不死鸟・</span>
                        <span>2020 年 09 月 10 日・</span>
                        <span>每日必看</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.wechat-item {
    border-radius: 6px;
    overflow: hidden;
    background: #fff no-repeat center;
    background-size: cover;
    position: relative;
    transition: 0.3s ease all;
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
        .post-card-container{
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