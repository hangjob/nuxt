<template>
    <div class="wechat-kuai">
        <div class="tab-nav">
            <a href class="active">全部</a>
            <a href>设计</a>
            <a href>原型</a>
            <a href>绘画</a>
        </div>
        <div class="tab-items">
            <WechatItem />
        </div>
    </div>
</template>
<script>
import WechatItem from '@/web/wechat/WechatItem'
export default {
    components: {
        WechatItem
    }
}
</script>
<style lang="less" scoped>
.wechat-kuai {
    .tab-nav {
        background-color: white;
        margin-top: 24px;
        border-radius: 4px;
        box-sizing: border-box;
        padding: 5px 0;
        a {
            padding: 4px 12px;
            font-size: 14px;
            color: #989fa5;
            border-radius: 4px;
            margin: 0 14px;
            font-weight: bold;
            font-weight: 500;
            display: inline-block;
            margin-bottom: 10px;
            margin-top: 10px;
            &:hover {
                background-color: #f7f8fa;
                border-color: #f7f8fa;
            }
        }
        a.active {
            color: white;
            background-color: #ffd102;
        }
    }
    .tab-items{
        margin-top: 20px;
    }
}
</style>