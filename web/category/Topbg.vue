<template>
    <div class="wp">
        <div class="topbg">
            <div class="slides_control">
                <a href>
                    <img :src="detail.data[0].pic" alt />
                </a>
            </div>
            <div class="item1">
                <a href>
                    <img :src="detail.data[1].pic" alt />
                </a>
                <a href>
                    <img :src="detail.data[2].pic" alt />
                </a>
            </div>
            <div class="item2">
                <a href>
                    <img :src="detail.data[3].pic" alt />
                </a>
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
    // height: 200px;
    // color: #fff;
    // position: relative;
    // margin-top: -10px;
    // background: hsla(0, 0%, 100%, 0.3);
    // overflow: hidden;
    display: flex;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
    a {
        display: block;
        overflow: hidden;
        height: 100%;
        position: relative;
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
        }
        &:hover::before {
            background: rgba(0, 0, 0, 0.3);
        }
    }
    .slides_control {
        width: 640px;
        height: 340px;
        overflow: hidden;
    }
    .item1 {
        width: 300px;
        margin-left: 10px;
        display: flex;
        height: 340px;
        flex-direction: column;
        a {
            height: 165px;
            margin-bottom: 10px;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
    .item2 {
        margin-left: 10px;
        width: 330px;
        height: 340px;
    }
}
</style>