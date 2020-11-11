<template>
    <div class="wechat-banner">
        <div class="items">
            <a class="item">
                <img src="https://cdn.uiforus.com/banner/uikit.png" alt />
            </a>
            <a class="item">
                <img src="https://cdn.uiforus.com/banner/sketch-inbetweening.png" alt />
            </a>
            <a class="item item-long">
                <img src="https://cdn.uiforus.com/banner/real.png" alt />
            </a>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.wechat-banner {
    .items {
        font-size: 0;
        .item {
            width: 320px;
            height: 216px;
            border-radius: 4px;
            vertical-align: bottom;
            display: inline-block;
            margin-right: 30px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .item-long {
            width: 600px;
            margin-right: 0;
        }
    }
}
</style>