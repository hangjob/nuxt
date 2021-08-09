<template>
    <div class="listPage">
        <div class="items">
            <article class="item" v-for="item in items" :key="item.id" @click="handItem({item})">
                <a class="item-link">
                    <div class="post-card">
                        <div class="blog-background" :style="{backgroundImage: `url(${item.pic})`}"></div>
                        <div class="post-card-mask">
                            <div class="post-card-container">
                                <h2 class="post-card-title">{{item.title}}</h2>
                                <div class="post-card-info">
                                    <span>全栈导航・</span>
                                    <span>{{$dayjs(item.create_time).format('dddd YYYY年MM月DD日 hh:mm:ss')}}・</span>
                                    <span>{{item.taxonomic.name}}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </article>
        </div>
        <ikonDetail ref="ikonDetail" />
    </div>
</template>
<script>
import ikonDetail from '@/web/ikon/ikonDetail'
import { apiSpecialSpecialNav } from '@/api/special'
export default {
    props: {
        items: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {

        }
    },
    components: {
        ikonDetail
    },
    methods: {
        handItem({ item }) {
            const loading = this.$loading({
                lock: true,
                text: '加载中',
                target: 'el-dialog',
                spinner: 'el-icon-loading',
                background: 'rgba(255, 255, 255, 0.6)',
                customClass: 'customClass'
            });
            apiSpecialSpecialNav({ id: item.id }).then((res) => {
                this.$refs.ikonDetail.visible = true;
                this.$refs.ikonDetail.content = res.data.detail;
                loading.close();
            })
        }
    }
}
</script>
<style lang="less">
.customClass {
    .el-loading-text {
        color: #ffd100;
    }
    .el-icon-loading {
        color: #ffd100;
    }
}
</style>
<style lang="less" scoped>
.listPage {
    margin-top: 30px;
    .item {
        width: 1100px;
        margin: 0 auto;
        margin-bottom: 40px;
        &-link {
            display: block;
            .post-card {
                border-radius: 5px;
                background-color: #2c2a2a;
                overflow: hidden;
                background: #fff no-repeat center;
                background-size: cover;
                position: relative;
                transition: 0.3s ease all;
                &:hover {
                    box-shadow: 0 22px 43px rgba(255, 255, 255, 0.8);
                    transform: translateY(-4px) scale(1.05);
                }
                .blog-background {
                    display: block;
                    width: 100%;
                    height: 100%;
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    position: absolute;
                    left: 0;
                    top: 0;
                    overflow: hidden;
                    opacity: 1;
                    transition: 1s ease opacity;
                }
                .post-card-mask {
                    background: rgba(0, 0, 0, 0.25);
                    position: relative;
                    z-index: 10;
                    display: table;
                    vertical-align: middle;
                    width: 100%;
                    height: 260px;
                    .post-card-container {
                        text-align: center;
                        display: table-cell;
                        width: 100%;
                        height: 100%;
                        vertical-align: middle;
                        .post-card-title {
                            font-size: 28px;
                            font-weight: 400;
                            color: #fff;
                        }
                        .post-card-info {
                            color: #eee;
                            font-size: 14px;
                            text-align: center;
                            font-weight: 400;
                        }
                    }
                }
            }
        }
    }
}
</style>