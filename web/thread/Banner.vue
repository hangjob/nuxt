<template>
    <div class="thread-banner">
        <div class="items wp">
            <div class="item">
                <img src="@/assets/images/guanggao/2.jpg" alt />
            </div>
            <div class="item">
                <img src="@/assets/images/guanggao/3.jpg" alt />
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
            height: 180px;
            border-radius: 6px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>