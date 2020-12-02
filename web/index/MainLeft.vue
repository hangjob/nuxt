<template>
    <div class="main-left">
        <div class="items">
            <a href class="item" v-for="(item,index) in listData.data" :key="index">
                <div
                    class="item-bg"
                    style="background-image: url(https://www.vipbic.com/uploads/20201021/924f51d25d4cffc9bfdbe53e4dfeb532.jpg)"
                ></div>
                <div class="item-mask">
                    <div class="item-mask-container">
                        <h2>KeyManager - 免费申请证书-支持泛域名</h2>
                        <p>
                            <span>羊先生・</span>
                            <span>2020年10月24日 08:55・</span>
                            <span>前端学习</span>
                        </p>
                    </div>
                </div>
            </a>
        </div>
        <div class="page">
            <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        listData: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.main-left {
    width: 800px;
    margin-top: 20px;
    .items {
        position: relative;
        .item {
            border-radius: 6px;
            display: inline-block;
            width: 100%;
            overflow: hidden;
            background-color: #fff;
            position: relative;
            transition: all 0.3s ease;
            height: 260px;
            vertical-align: bottom;
            margin-bottom: 50px;
            &-bg {
                display: block;
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 50%;
                position: absolute;
                left: 0;
                top: 0;
                overflow: hidden;
                opacity: 1;
                transition: opacity 1s ease;

                &::before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.07);
                }
            }
            &-mask {
                background: rgba(0, 0, 0, 0.1);
                position: relative;
                z-index: 10;
                display: table;
                vertical-align: middle;
                width: 100%;
                height: 100%;
                &-container {
                    padding: 20px 20px;
                    text-align: center;
                    display: table-cell;
                    width: 100%;
                    height: 100%;
                    vertical-align: middle;
                    h2 {
                        font-size: 20px;
                        font-weight: 600;
                        color: #fff;
                        margin-bottom: 10px;
                    }
                    p {
                        span {
                            color: #eee;
                            font-size: 18px;
                            text-align: center;
                            font-weight: 400;
                        }
                    }
                }
            }
            &:hover {
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                transform: translateY(-4px) scale(1.02);
            }
            &:last-child {
                margin-bottom: 30px;
            }
        }
    }
    .page {
        text-align: right;
    }
}
</style>