<template>
    <div class="left">
        <div class="dh-nav" style="position: static; top: 0px;">
            <a class="cur" href="javascript:;">推荐站点</a>
            <a href="javascript:;" class>电商分类</a>
            <a href="javascript:;" class>设计教程</a>
            <a href="javascript:;" class>灵感创意</a>
            <a href="javascript:;" class>配色方案</a>
            <a href="javascript:;" class>高清图库</a>
            <a href="javascript:;" class>设计工具</a>
            <a href="javascript:;" class>行业资讯</a>
            <a href="javascript:;" class>字体设计</a>
            <a href="javascript:;" class>设计团队</a>
            <a href="javascript:;" class>媒体和公众号</a>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.left {
    width: 250px;
    .dh-nav {
        background: #fff;
        z-index: 10;
        a {
            display: block;
            padding: 0 0 0 25px;
            line-height: 60px;
            font-size: 16px;
            color: #666;
            border-top: 1px solid #f3f3f3;
            &:first-child{
                border-top: none;
            }
        }
        a.cur {
            font-weight: 700;
            color: #0f92fb;
            border-left: 3px solid #0f92fb;
            padding: 0 0 0 22px;
        }
    }
}
</style>