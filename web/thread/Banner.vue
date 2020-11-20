<template>
    <div class="thread-banner">
        <div class="items wp">
            <div class="item">
                <img
                    src="https://reviveimg.hellorf.com/www/images/95d7ce87070fbb3f120fcf08be07e73b.jpg"
                    alt
                />
            </div>
            <div class="item">
                <img
                    src="https://reviveimg.hellorf.com/www/images/0cdee08af7e1847abe9462a6eb50f92d.png"
                    alt
                />
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.thread-banner {
    border-bottom: 1px solid #eee;
    padding: 20px 0;
    background: #fff;
    .items {
        display: flex;
        justify-content: space-between;
        .item {
            width: 49%;
            height: 120px;
            border-radius: 6px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>