<template>
    <div class="detail">
        <div class="wp">
            <div class="detail-container">
                <div class="detail-left">
                    <div class="breadcrumb">
                        <i class="el-icon-location"></i>
                        <span>
                            <a>{{detail.taxonomic.primary.name}}</a>
                        </span>
                        <i>/</i>
                        <span>
                            <a>{{detail.taxonomic.name}}</a>
                        </span>
                        <i>/</i>
                        <span>
                            <a>{{detail.it_name}}</a>
                        </span>
                    </div>
                    <div class="detail-left-title">
                        <h1>{{detail.it_name}}</h1>
                        <a href="javascript:;" @click="openUrl">
                            立即访问
                            <i class="el-icon-right"></i>
                        </a>
                    </div>
                    <div class="detail-left-content">
                        <no-ssr>
                            <mavon-editor
                                class="detail-md itnavs-markdown"
                                :value="detail[keyName]"
                                :subfield="false"
                                :defaultOpen="'preview'"
                                :toolbarsFlag="false"
                                :editable="false"
                            />
                        </no-ssr>
                    </div>
                    <div class="widget1 iconfont"></div>
                </div>
                <div class="detail-right">
                    <div class="users">
                        <div class="user">
                            <div class="user-up">
                                <img class="tile" :src="detail.member.userhead" alt />
                            </div>
                            <div class="user-head">
                                <a href>
                                    <img :src="detail.member.userhead" alt />
                                </a>
                            </div>
                            <div class="user-info">
                                <span>{{detail.member.username}}</span>
                                <span class="tag">管理员</span>
                            </div>
                            <div class="user-one">{{detail.member.description}}</div>
                        </div>
                        <div class="included">
                            <div class="included-title">
                                <h5>最新添加</h5>
                            </div>
                            <div class="included-list">
                                <ul>
                                    <li>
                                        <a href>
                                            <span>1</span>消费者有多敏感，看老干妈就知道了
                                        </a>
                                    </li>
                                    <li>
                                        <a href>
                                            <span>2</span>消费者有多敏感，看老干妈就知道了
                                        </a>
                                    </li>
                                    <li>
                                        <a href>
                                            <span>3</span>消费者有多敏感，看老干妈就知道了
                                        </a>
                                    </li>
                                    <li>
                                        <a href>
                                            <span>4</span>消费者有多敏感，看老干妈就知道了
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="minbanner">
                        <minBanner></minBanner>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import minBanner from './minBanner'
export default {
    props: {
        detail: {
            type: Object,
            default: () => { }
        },
        keyName: {
            type: String,
            default: 'content'
        }
    },
    components: {
        minBanner
    },
    data() {
        return {

        }
    },
    created() {

    },
    methods: {
        openUrl() {
            this.$refs.attention.openWechat()
        }
    }
}
</script>
<style>
.detail .markdown-body blockquote {
    border-left: 0.25em solid #ed328d;
}
.detail .v-show-content {
    background-color: #fff !important;
    padding: 0;
}
.detail .markdown-body img {
    border-radius: 6px;
}
</style>
<style lang="less">
.detail {
    &-md {
        box-shadow: none !important;
    }
    &-container {
        display: flex;
        .detail-left {
            width: 950px;
            background-color: #fff;
            border-radius: 6px;
            padding: 20px;
            position: relative;
            overflow: hidden;
            .breadcrumb {
                font-size: 14px;
                color: #bbb;
                vertical-align: middle;
                zoom: 1;
                border-bottom: 1px solid #f7efef;
                margin: 0px -20px 0 -20px;
                padding: 0px 20px 10px 20px;
                line-height: 1;
                a {
                    color: #bbb;
                    cursor: pointer;
                }
                i {
                    color: #ddd;
                    margin: 0 6px;
                }
                i.el-icon-location {
                    margin: 0;
                }
            }
            &-title {
                margin-top: 20px;
                display: flex;
                align-items: center;
                h1 {
                    font-size: 24px;
                    line-height: 1.2;
                    font-weight: bold;
                    flex: 1;
                }
                a {
                    color: #fff;
                    display: inline-block;
                    padding: 8px 20px;
                    font-size: 14px;
                    border-radius: 4px;
                    background-color: #6fc496;
                    border-color: #6fc496;
                    color: #fff;
                }
            }
            &-content {
            }
        }
        .detail-right {
            position: relative;
            margin-left: 10px;
            width: 340px;
            .users {
                background-color: #fff;
                border-radius: 6px;
                overflow: hidden;
                .user {
                    &-up {
                        height: 125px;
                        width: 100%;
                        filter: blur(4px);
                        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                        .tile {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                    &-head {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-top: -45px;
                        position: relative;
                        img {
                            width: 84px;
                            height: 84px;
                            border-radius: 50%;
                            overflow: hidden;
                            border: 4px solid rgba(255, 255, 255, 0.3);
                            transition: all 500ms;
                        }
                    }
                    &-info {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 16px;
                        margin: 15px 0;
                        color: #333;
                        .tag {
                            background-color: #fc3c2d;
                            border-radius: 2px;
                            color: #fff;
                            display: inline-block;
                            font-size: 12px;
                            line-height: 1;
                            padding: 4px 5px 4px 5px;
                            margin-left: 5px;
                        }
                    }
                    &-one {
                        padding: 0 20px;
                        text-align: center;
                        color: #999;
                        font-size: 14px;
                        margin: 12px 0;
                    }
                }
                .included {
                    padding: 0 20px;
                    &-title {
                        position: relative;
                        text-align: center;
                        h5 {
                            position: relative;
                            z-index: 2;
                            background: #fff;
                            padding: 0 8px;
                            font-size: 16px;
                            color: #333;
                            display: inline-block;
                            font-weight: 400;
                        }
                        &::after {
                            content: '';
                            display: block;
                            position: absolute;
                            top: 50%;
                            left: 0;
                            width: 100%;
                            height: 1px;
                            background: #f7efef;
                            box-sizing: border-box;
                        }
                    }
                    &-list {
                        padding-bottom: 10px;
                        ul {
                            li {
                                text-align: center;
                                margin-top: 10px;
                                a {
                                    span {
                                        font-size: 13px;
                                        display: inline-block;
                                        vertical-align: top;
                                        text-align: center;
                                        width: 18px;
                                        height: 18px;
                                        background-color: #bebebe;
                                        color: #fff;
                                        border-radius: 4px;
                                        margin-top: 1px;
                                        margin-right: 5px;
                                    }
                                    display: inline-block;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    font-size: 14px;
                                    line-height: 20px;
                                    color: #333;
                                }
                            }
                        }
                    }
                }
            }
            .minbanner {
                margin-top: 20px;
                overflow: hidden;
                 background-color: #fff;
            }
        }
    }
}
</style>