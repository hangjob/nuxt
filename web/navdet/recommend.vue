<template>
    <div class="recommend">
        <div class="recommend-heading">
            <h3 class="title">热门网站</h3>
            <a href class="more">...</a>
        </div>
        <div class="recommend-body">
            <nuxt-link :to="$utils.navLink(item)" v-for="item in popularIt" :key="item.id">
                <div class="icon">
                    <img :alt="item.describe" :title="item.it_name" :src="item.icon" />
                </div>
                <div class="metas">
                    <h5>{{item.it_name}}</h5>
                    <p>{{item.describe}}</p>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        popularIt: {
            type: Array,
            default: () => []
        }
    }
}
</script>
<style lang="less" scoped>
.recommend {
    padding: 20px;
    margin-bottom: 50px;
    background-color: #fff;
    border-radius: 5px;
    &-heading {
        position: relative;
        padding-bottom: 15px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f5f5f5;
        .title {
            line-height: 1;
            font-size: 18px;
            color: #545454;
        }
        .more {
            color: #919191;
            transition: all 0.3s ease;
            display: flex;
        }
    }
    &-body {
        display: flex;
        flex-wrap: wrap;
        a {
            display: flex;
            width: 50%;
            height: 60px;
            margin-top: 20px;
            .icon {
                width: 60px;
                height: 60px;
                margin-right: 15px;
                align-items: center;
                justify-content: center;
                border-radius: 5px;
                img {
                    width: auto;
                    height: auto;
                    max-width: 85%;
                    max-height: 85%;
                    border-radius: 5px;
                }
            }
            .metas {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                flex: 1;
                h5 {
                    font-size: 14px;
                    color: #606266;
                }
                p {
                    color: #c1c1c1;
                    word-break: break-all;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    padding-right: 5px;
                }
            }
        }
    }
}
</style>