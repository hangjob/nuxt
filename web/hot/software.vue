<template>
    <div class="software">
        <div class="tit">
            <h2>软件下载</h2>
        </div>
        <ul class="clearfix">
            <li
                :style="{backgroundColor:item.hits.color.color}"
                v-for="item in items"
                :key="item.id"
            >
                <a href="javascript:;" @click="openDialogVisible(item)">
                    <div class="img">
                        <img :src="item.icon" alt />
                    </div>
                    <div class="tit">
                        <h4>{{item.name}}</h4>
                    </div>
                </a>
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
    methods: {
        openDialogVisible(item) {
            this.$refs.DownloadPopup.openDialogVisible(item);
        }
    }
}
</script>
<style lang="less" scoped>
.software {
    .tit {
        margin: 20px 0 22px;
        h2 {
            line-height: 30px;
            font-size: 24px;
            color: #666;
        }
    }
    ul {
        margin-right: -20px;
        li {
            width: 244px;
            height: 100px;
            margin: 0 20px 20px 0;
            background: #0dbbe1;
            overflow: hidden;
            border-radius: 4px;
            float: left;
            a {
                display: flex;
                align-items: center;
                height: 100%;
                box-sizing: border-box;
                padding: 10px 15px;
                .img {
                    width: 60px;
                    height: 60px;
                    margin-right: 10px;
                    flex-shrink: 0;
                    border-radius: 10px;
                    overflow: hidden;
                    img {
                        width: 100%;
                        object-fit: cover;
                        height: 100%;
                    }
                }
                .tit {
                    h4 {
                        word-wrap: break-word;
                        word-break: break-all;
                        font-size: 15px;
                        color: #fff;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                }
            }
        }
    }
}
</style>