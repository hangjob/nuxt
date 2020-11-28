<template>
    <div class="userinfo">
        <div class="wp work-details-box-wrap">
            <div class="left-details-head">
                <h2>{{detail.it_name}}</h2>
                <p class="title-time">
                    <span>{{$dayjs(detail.create_time).format('MM月DD日 YYYY年, dddd hh点mm分ss秒')}}</span> 发布
                </p>
                <div class="work-head-box">
                    <div class="head-left">
                        <span class="head-index">
                            <span>
                                <a>原创作品</a>
                            </span>
                            <i>/</i>
                            <span>
                                <a>{{detail.taxonomic.primary.name}}</a>
                            </span>
                            <i>/</i>
                            <span>
                                <a>{{detail.taxonomic.name}}</a>
                            </span>
                            <i>/</i>
                        </span>
                    </div>
                    <div class="head-right">
                        <span class="head-data-show">
                            <a href>
                                <i class="iconfont icon-chakan"></i>
                                {{detail.hits}}
                            </a>
                            <a href>
                                <i class="iconfont icon-pinglun1"></i>22
                            </a>
                            <a href>
                                <i class="iconfont icon-dianzan5"></i>
                                {{detail.like}}
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div class="left-details-author">
                <div class="avatar">
                    <img
                        :src="detail.member.userhead"
                        alt
                    />
                </div>
                <div class="author-info">
                    <p class="author-info-title">
                        <a href>{{detail.member.username}}</a>
                    </p>
                    <p class="position-info">{{detail.member.userhome.city}} | {{detail.member.userhome.occupation}}</p>
                    <div class="btn-area">
                        <button class="js-project-focus-btn">关注</button>
                        <button class="js-project-focus-btn">私信</button>
                    </div>
                </div>
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
.userinfo {
    border-bottom: 1px solid #eee;
    background-color: #ffffff;
    .work-details-box-wrap {
        display: flex;
        .left-details-head {
            flex: 1;
            border-right: 1px solid #eee;
            padding: 20px 0;
            > h2 {
                color: #333;
                font-size: 24px;
                font-weight: 400;
                display: inline-block;
            }
            .title-time {
                padding-top: 8px;
                font-size: 14px;
                color: #bbb;
            }
            .work-head-box {
                display: flex;
                padding-top: 9px;
                .head-left {
                    flex: 1;
                    .head-index {
                        font-size: 14px;
                        color: #bbb;
                        display: inline-block;
                        vertical-align: middle;
                        zoom: 1;
                        a {
                            color: #bbb;
                        }
                        i {
                            color: #ddd;
                            margin: 0 16px;
                        }
                    }
                }
                .head-right {
                    .head-data-show {
                        display: flex;
                        a {
                            display: flex;
                            align-items: center;
                            zoom: 1;
                            color: #bbb;
                            font-size: 14px;
                            position: relative;
                            cursor: default;
                            margin: 0 25px;
                            i {
                                margin-right: 8px;
                                font-size: 18px;
                            }
                        }
                    }
                }
            }
        }
        .left-details-author {
            width: 300px;
            padding: 15px 0 20px 15px;
            overflow: inherit;
            box-sizing: border-box;
            display: flex;
            justify-content: space-between;
            .avatar {
                width: 80px;
                height: 80px;
                img {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                }
            }
            .author-info {
                display: flex;
                flex-direction: column;
                margin-left: 20px;
                justify-content: space-between;
                .author-info-title {
                    a {
                        color: #333;
                        font-size: 16px;
                        font-weight: 600;
                        vertical-align: middle;
                    }
                }
                .position-info {
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    font-size: 12px;
                    color: #bbb;
                    margin-bottom: 12px;
                    display: flex;
                }
            }
            .btn-area {
                margin-top: 15px;
                display: flex;
                .js-project-focus-btn {
                    height: 36px;
                    color: #444;
                    background: #ffe300;
                    border: 1px solid #ffe300;
                    border-radius: 4px;
                    cursor: pointer;
                    width: 88px;
                    margin-right: 10px;
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
    }
}
</style>