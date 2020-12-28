<template>
    <div class="user">
        <div class="yhhi">
            上午好！
            <a href="?so=" title="点击只看自己的对话">
                <strong>我是羊先生</strong>
            </a>，欢迎你来到互动客厅，现在来与我对话吧。
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.user {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    .yhhi {
        height: 152px;
        width: 240px;
        background-image: url('~@/assets/images/wangkun_ct_bj.png');
        background-repeat: no-repeat;
        background-position: left bottom;
        font-size: 12px;
        line-height: 20px;
        color: #ffffff;
        background-size: cover;
        background-size: cover;
        padding-top: 25px;
        padding-right: 105px;
        padding-left: 20px;
        a {
            color: #ffffff;
        }
    }
}
</style>