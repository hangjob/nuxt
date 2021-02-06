<template>
    <div class="navlist">
        <div class="tit">
            <h2>热榜</h2>
        </div>
        <ul class="clearfix">
            <li v-for="(item,index) in items" :key="index" v-if="item.pic">
                <template v-if="item.isArticle">
                    <nuxt-link :to="'/article/'+item.id">
                        <img :src="item.pic" alt />
                        <span class="btn btn-green">立即访问</span>
                        <h2>{{item.name}}</h2>
                    </nuxt-link>
                    <p>{{item.des}}</p>
                </template>
                <template v-else>
                    <a href="javascript:;">
                        <img :src="item.pic" alt />
                        <span class="btn btn-green" @click="openDialogVisible(item)">点击下载</span>
                        <h2>{{item.name}}</h2>
                    </a>
                    <p>{{item.des}}</p>
                </template>
            </li>
        </ul>
        <DownloadPopup ref="DownloadPopup"></DownloadPopup>
    </div>
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => { }
        }
    },
    computed: {
        link() {
            return function (obj) {
                if (obj.isArticle) {

                }
            }
        }
    }, 
    methods: {
        openDialogVisible(item){
            this.$refs.DownloadPopup.openDialogVisible(item);
        }
    }
}
</script>
<style lang="less" scoped>
.navlist {
    .tit {
        margin: 0 0 22px;
        h2 {
            line-height: 30px;
            font-size: 24px;
            color: #666;
        }
    }
    ul {
        margin-right: -20px;
        li {
            width: 640px;
            padding: 0 0 20px;
            margin: 0 20px 30px 0;
            background: #fff;
            overflow: hidden;
            float: left;
            box-sizing: border-box;
            border-radius: 4px;
            a {
                position: relative;
                display: block;
                img {
                    display: block;
                    margin-bottom: 20px;
                    border: 0;
                    max-width: 100%;
                    width: 100%;
                    object-fit: cover;
                    height: 240px;
                }
                span {
                    position: absolute;
                    top: 192px;
                    right: 16px;
                    overflow: hidden;
                    height: 40px;
                    line-height: 40px;
                    padding: 0 20px;
                    font-size: 18px;
                    color: #fff;
                    border-radius: 3px;
                    display: inline-block;
                    vertical-align: middle;
                    color: #fff;
                    background: #2ed25d;
                }
                h2 {
                    overflow: hidden;
                    height: 34px;
                    line-height: 34px;
                    margin: 0 30px;
                    color: #333;
                    font-size: 20px;
                    font-weight: 400;
                }
            }
            p {
                overflow: hidden;
                height: 28px;
                line-height: 28px;
                margin: 0 30px;
                color: #666;
                font-size: 14px;
            }
        }
    }
}
</style>