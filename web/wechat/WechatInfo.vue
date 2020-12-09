<template>
    <div class="WechatInfo">
        <h3>
            {{detail.ArticleTitle}}
            <span>收录时间：{{$dayjs(detail.ArticlePublishDateTime).format('YYYY年MM月DD日, hh点mm分ss秒')}}</span>
        </h3>
        <div class="panel">
            <div class="auther">
                <h4>作者：{{detail.AuthorName}}</h4>
                <a :href="detail.ArticleUrl" target="_blank">原文：点击查看原文</a>
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
.WechatInfo {
    padding: 0 15px;
    border-color: #e4ecf3;
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid transparent;
    border-radius: 4px;
    margin-top: 10px;
    h3 {
        position: relative;
        background: #fff;
        border-bottom: 1px solid #f5f5f5;
        font-size: 20px;
        padding: 12px 0;
        font-weight: 600;
        span {
            position: absolute;
            right: 0;
            font-size: 12px;
            color: #cacaca;
        }
    }
    .panel {
        position: relative;
        padding: 15px 0;
        display: flex;
        flex: 1;
        img {
            display: flex;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            cursor: pointer;
        }
        .auther {
            display: flex;
            flex-direction: column;
            flex: 1;
            justify-content: space-between;
            a {
                color: #c1c1c1;
                font-size: 12px;
                table-layout: fixed;
                word-break: break-all;
                overflow: hidden;
                &:hover {
                    color: #19f;
                }
            }
        }
    }
}
</style>