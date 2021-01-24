<template>
    <div class="topbg" id="topbg">
        <img class="img" :src="detail.pic" alt />
        <div class="wp">
            <div class="topbg-content">
                <h2>{{detail.name}}</h2>
                <p>{{detail.des}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        detail: {
            type: Object,
            default: () => { }
        }
    },
}
</script>
<style lang="less" scoped>
.topbg {
    height: 200px;
    color: #fff;
    position: relative;
    margin-top: -10px;
    background: hsla(0, 0%, 100%, 0.3);
    overflow: hidden;
    .img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: blur(1px);
    }
    &-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        h2 {
            font-size: 30px;
            font-weight: 700;
            letter-spacing: 5px;
        }
        p {
            z-index: 1;
            font-size: 14px;
            text-shadow: 0.1em 0.1em 0.2em #453b3f;
            letter-spacing: 2px;
        }
    }
}
</style>