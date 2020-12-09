<template>
    <div class="wechat-item">
        <div class="title">
            <div class="title-logo"></div>
            <div class="title-name">{{detail.type.name}}</div>
            <div class="title-sg">热搜</div>
        </div>
        <div class="content">
            <ul>
                <li v-for="(item,index) in detail.lists" :key="item.id">
                    <a :href="`wechat/${item.id}`" target="_blank">
                        <span class="content-idx">{{index+1}}</span>
                        <span class="content-title">{{item.ArticleTitle}}</span>
                        <span
                            class="content-time"
                        >{{$dayjs(item.ArticlePublishDateTime).format('MM月DD日 YYYY年, dddd hh点mm分ss秒')}}</span>
                    </a>
                </li>
            </ul>
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
.wechat-item {
    background-color: #fff;
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
    .title {
        display: flex;
        align-items: center;
        justify-content: left;
        border-bottom: 1px solid #ebebeb;
        padding-bottom: 10px;
        &-name {
            font-size: 22px;
            font-weight: bold;
            flex: 1;
        }
    }
    .content {
        ul {
            li {
                &:first-child {
                    margin-top: 10px;
                }
                a {
                    display: flex;
                    justify-content: left;
                    font-size: 16px;
                    color: #1a1a1a;
                    align-items: center;
                    padding: 10px 0;
                    span {
                        line-height: 1;
                    }

                    .content-idx {
                        display: inline-block;
                        width: 20px;
                        height: 20px;
                        text-align: center;
                        line-height: 20px;
                        background-color: #b0b0b0;
                        border-radius: 50%;
                        color: #fff;
                        margin-right: 10px;
                        font-size: 14px;
                    }

                    .content-title {
                        flex: 1;
                    }
                    .content-time {
                        color: rgba(0, 0, 0, 0.54);
                        max-width: 100px;
                        height: 22px;
                        line-height: 22px;
                        overflow: hidden;
                        text-align: right;
                    }
                }
                &:hover{
                   .content-title{
                       color: #19F;
                   } 
                }
                &:nth-of-type(1) {
                    .content-idx {
                        background-color: #fd9800;
                    }
                }
                &:nth-of-type(2) {
                    .content-idx {
                        background-color: #ff3366;
                    }
                }
                &:nth-of-type(3) {
                    .content-idx {
                        background-color: #469bfa;
                    }
                }
            }
        }
    }
}
</style>