<template>
    <div class="rightuser">
        <div class="logon">
            <p class="title">嗨！朋友</p>
            <p>所有的伟大，都源于一个勇敢的开始</p>
        </div>
        <div class="tips">免注册登录</div>
        <div class="button">
            <a href>QQ登录</a>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.rightuser {
    border-radius: 6px;
    padding: 10px;
    background-color: #fff;
    .logon {
        font-size: 14px;
        padding: 8px;
        .title {
            margin-bottom: 10px;
            color: #bcbcbc;
        }
    }
    .tips {
        padding: 10px 14px;
        font-size: 12px;
        background-color: #f7f8fa;
        text-shadow: #fff 0px 1px 0px;
        margin: 0 -10px;
    }
    .button {
        font-size: 12px;
        display: flex;
        padding: 8px 8px 0 8px;
        a {
            display: block;
            margin-right: 16px;
            &::before {
                background-color: #18c531;
                content: '';
                width: 10px;
                height: 10px;
                border-radius: 100%;
                display: inline-block;
                margin-right: 5px;
            }
        }
    }
}
</style>