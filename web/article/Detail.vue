<template>
    <div class="detail">
        <div class="detail-left">
            <div class="info">
                <div class="header">
                    <h1>{{detail.title}}</h1>
                    <div class="meta">
                        <span>
                            <i class="iconfont icon-shijian2"></i>
                            {{$dayjs(detail.create_time).format('YYYY年MM月DD日')}}
                        </span>
                        <span>
                            <i class="iconfont icon-chakan"></i>
                            {{detail.hits}}次
                        </span>
                    </div>
                </div>
                <div class="user">
                    <div class="user-left">
                        <div class="img">
                            <img :src="detail.member.userhead" alt />
                        </div>
                        <div class="name">
                            <b>{{detail.member.username}}</b>
                            <span class="user-title">{{detail.member.description}}</span>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <no-ssr>
                        <mavon-editor
                            class="detail-md itnavs-markdown"
                            :value="detail['content']"
                            :subfield="false"
                            :defaultOpen="'preview'"
                            :toolbarsFlag="false"
                            :editable="false"
                        />
                    </no-ssr>
                </div>
                <div class="tags-meat">
                    <nuxt-link :to="`/search?ks=${item}`" v-for="(item,index) in detail.keywords" :key="index">
                        <span class="tag-img">
                            <i class="icon-biaoqian iconfont"></i>
                        </span>
                        <span class="tag-text">{{item}}</span>
                    </nuxt-link>
                </div>
            </div>
            <div class="community">
                <img src="@/assets/images/qzdh.jpg" alt />
            </div>
        </div>
        <div class="detail-right">
            <Rightuser />
            <Casually :items="detail.recommended" />
        </div>
    </div>
</template>
<script>
import Rightuser from './Rightuser'
import Casually from './Casually'
export default {
    components: {
        Rightuser,
        Casually
    },
    props: {
        detail: {
            type: Object,
            default: () => { }
        }
    },
}
</script>
<style lang="less" scoped>
.detail {
    display: flex;
    &-left {
        width: 950px;
        position: relative;
        .info {
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
            border-radius: 6px;
            .header {
                h1 {
                    font-size: 30px;
                    font-weight: normal;
                    line-height: 42px;
                }
                .meta {
                    display: flex;
                    align-items: center;
                    margin-top: 10px;
                    span {
                        background-color: rgba(245, 245, 245, 0.47);
                        display: flex;
                        align-items: center;
                        line-height: 19px;
                        padding: 5px 8px;
                        border-radius: 4px;
                        margin-right: 10px;
                        color: #ccc;
                        i {
                            margin-right: 5px;
                        }
                    }
                }
            }
            .user {
                padding: 10px 25px;
                background: #f7f8fa;
                margin: 20px -20px 0 -20px;
                &-left {
                    display: flex;
                    align-items: center;
                    .img {
                        width: 36px;
                        height: 36px;
                        min-width: 36px;
                        margin-right: 10px;
                        border-radius: 4px;
                        overflow: hidden;
                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                    .name {
                        display: flex;
                        flex-flow: column;
                        b {
                            font-size: 15px;
                            font-weight: 700;
                        }
                        span {
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 1;
                            overflow: hidden;
                        }
                    }
                }
            }
            .content {
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
        .community {
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
    }
    &-right {
        position: relative;
        margin-left: 10px;
        width: 340px;
    }
}
</style>