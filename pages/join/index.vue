<template>
    <div class="join">
        <Header />
        <div class="wp join-container clearfix">
            <img class="wexin" src="@/assets/images/5.png" alt="">
        </div>
        <Footer />
    </div>
</template>
<script>
export default {

};
</script>

<style lang="less" scoped>
.join {
    &-container {
        height: 1000px;
        width: 100%;
        margin-top: -10px;
        background: url('~@/assets/images/joinbg.jpg') repeat;
        margin-bottom: -30px;
        text-align: center;
        .wexin{
            width: 750px;
            padding: 30px;
        }
    }
}
</style>