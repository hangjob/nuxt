<template>
    <div class="article-banner">
        <div class="items">
            <a class="item">
                <img src="https://www.ubuuk.com/uploads/articles/thumbnail/201909/b21bb481b0a96801e2cecebd119bb79171f9062d.jpg" alt />
            </a>
            <a class="item">
                <img src="https://www.ubuuk.com/uploads/articles/thumbnail/201909/b21bb481b0a96801e2cecebd119bb79171f9062d.jpg" alt />
            </a>
            <a class="item item-long">
                <img src="https://www.ubuuk.com/uploads/articles/thumbnail/201909/b21bb481b0a96801e2cecebd119bb79171f9062d.jpg" alt />
            </a>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.article-banner {
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