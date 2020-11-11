<template>
    <div class="wechat-kuai">
        <div class="tabNav">
            <a href class="active">全部</a>
            <a href>设计</a>
            <a href>原型</a>
            <a href>绘画</a>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.wechat-kuai {
    background-color: white;
    padding: 16px 8px;
    margin-top: 24px;
    border-radius: 4px;
    box-sizing: border-box;
    .tabNav {
        margin-bottom: -15px;
        a {
            padding: 4px 12px;
            font-size: 14px;
            color: #989fa5;
            border-radius: 4px;
            margin: 0 14px;
            font-weight: bold;
            font-weight: 500;
            display: inline-block;
            margin-bottom: 15px;
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
}
</style>