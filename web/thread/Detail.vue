<template>
    <div class="detail">
        <div class="wp">
            <div class="detail-container">
                <div class="detail-left">
                    <div class="info">
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
                        <div class="mesg">
                            <div class="hits">
                                <span class="t">阅读量</span>
                                <span class="n">{{detail.hits}}</span>
                            </div>
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
                        <div class="tags-meat">
                            <nuxt-link
                                :to="`/search?ks=${item}`"
                                v-for="(item,index) in detail.keywords"
                                :key="index"
                            >
                                <span class="tag-img">
                                    <i class="icon-biaoqian iconfont"></i>
                                </span>
                                <span class="tag-text">{{item}}</span>
                            </nuxt-link>
                        </div>
                        <div class="detail-left-leave">
                            <a href="javascript:;" @click="openUrl">前往[{{detail.it_name}}]官网</a>
                        </div>
                        <div class="widget1 iconfont"></div>
                    </div>
                    <div class="detail-left-community">
                        <img src="@/assets/images/qzdh.jpg" alt />
                    </div>
                </div>
                <div class="detail-right">
                    <div class="users">
                        <div class="user">
                            <div class="user-up">
                                <img class="tile" :src="detail.pic" :alt="detail.it_name" />
                            </div>
                            <div class="user-head">
                                <a href>
                                    <img
                                        :src="detail.member.userhead"
                                        :alt="detail.member.username"
                                    />
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
                                    <li v-for="(item,idx) in alldetails.latest" :key="item.id">
                                        <nuxt-link :to="$utils.navLink(item)">
                                            <span>{{idx+1}}</span>
                                            {{item.it_name}}-{{item.describe}}
                                        </nuxt-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="minbanner">
                        <minBanner :dataImage="alldetails.hot"></minBanner>
                    </div>
                </div>
            </div>
        </div>
        <Attention :url="detail.url" ref="attention"></Attention>
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
        alldetails: {
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
            .info {
                background-color: #fff;
                border-radius: 6px;
                padding: 20px;
                position: relative;
                overflow: hidden;
            }
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
            .mesg {
                position: absolute;
                right: 10px;
                top: 10px;
                .hits {
                    display: flex;
                    align-items: center;
                    .t {
                        font-size: 12px;
                        color: #bbb;
                        margin-right: 3px;
                    }
                    .n {
                        color: #bbb;
                        letter-spacing: 1px;
                        font-size: 18px;
                        color: #ebebeb;
                        font-family: BrandonText-Black;
                    }
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
                    background-color: #ff3366;
                    border-color: #ff3366;
                    color: #fff;
                }
            }
            &-leave {
                text-align: center;
                margin-top: 30px;
                a {
                    color: #fff;
                    display: inline-block;
                    padding: 8px 20px;
                    font-size: 14px;
                    border-radius: 4px;
                    background-color: #ffd100;
                    border-color: #ffd100;
                    color: #fff;
                    width: 60%;
                }
            }
            &-community {
                background-color: #fff;
                border-radius: 6px;
                margin-top: 20px;
                overflow: hidden;
                img {
                    width: 100%;
                    object-fit: cover;
                    height: 200px;
                }
            }
            .tags-meat {
                padding: 20px 20px 0px 20px;
                border-top: 1px solid #f7efef;
                position: relative;
                margin: 0 -20px;
                display: flex;
                flex-flow: wrap;
                a {
                    margin-right: 10px;
                    font-size: 12px;
                    display: flex;
                    background-color: #f3f3f3;
                    color: #999;
                    align-items: center;
                    transition: all 0.5s;
                    margin-bottom: 10px;
                    line-height: 1;
                    border-radius: 20px;
                    border: 1px solid #f7efef;
                    .tag-img {
                        padding: 3px;
                        border-radius: 100%;
                        background-color: #fff;
                        i {
                            color: red;
                        }
                    }
                    .tag-text {
                        padding: 0 5px 0 2px;
                    }
                }
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
                            transition: all 0.3s;
                            &:hover {
                                transform: rotate(180deg);
                            }
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
                            border-radius: 4px;
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
                                text-align: left;
                                margin-top: 16px;
                                a {
                                    display: inline-block;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    font-size: 14px;
                                    line-height: 20px;
                                    color: #333;
                                    width: 100%;
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
                                }
                                &:nth-of-type(1) {
                                    span {
                                        background-color: #fd9800;
                                    }
                                }
                                &:nth-of-type(2) {
                                    span {
                                        background-color: #ff3366;
                                    }
                                }
                                &:nth-of-type(3) {
                                    span {
                                        background-color: #469bfa;
                                    }
                                }
                                &:nth-of-type(4) {
                                    span {
                                        background-color: #67c23a;
                                    }
                                }
                                &:nth-of-type(5) {
                                    span {
                                        background-color: #ffd100;
                                    }
                                }
                                &:nth-of-type(6) {
                                    span {
                                        background-color: #26cb7c;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            .minbanner {
                margin-top: 20px;
                overflow: hidden;
                border-radius: 6px;
                background-color: #fff;
            }
        }
    }
}
</style>