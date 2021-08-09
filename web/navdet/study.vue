<template>
    <div class="study">
        <div class="study-cont">
            <div class="cover">
                <img :src="detail.icon" :alt="detail.describe" />
            </div>
            <div class="info">
                <h3 class="ellipsis">{{detail.it_name}}</h3>
                <time>发布时间：{{$dayjs(detail.create_time).format('MM月 DD日 YYYY , hh点mm分ss秒')}}</time>
                <div class="msg">
                    <p v-html="detail.describe"></p>
                </div>
                <div class="tag">
                    <ul>
                        <li v-for="(item,index) in detail.keywords" :key="index">
                            <nuxt-link :to="`/search?ks=${item}`">
                                <i class="fa fa-leaf" aria-hidden="true"></i>
                                <span>{{item}}</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <div class="mtm">
                    <a
                        href="javascript:;"
                        class="leave itnavs-button"
                        @click="$refs.attention.openWechat()"
                    >
                        <i class="fa fa-hand-o-right" aria-hidden="true"></i>前往官网
                    </a>
                    <!-- <a href class="collect itnavs-button">
                        <i class="fa fa-paper-plane" aria-hidden="true"></i>放置首页
                    </a>-->
                </div>
            </div>
        </div>
        <div class="study-author"></div>
        <Attention :url="detail.url" ref="attention"></Attention>
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
.study {
    border-radius: 6px;
    padding: 20px 20px;
    background: #fff;
    min-height: 30px;
    position: relative;
    margin-bottom: 20px;
    &-cont {
        display: flex;
        .cover {
            width: 260px;
            margin: 0 30px 0 0;
            flex-shrink: 0;
            max-height: 160px;
            min-height: 160px;
            background-color: #fbf8f8;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            img {
                width: auto;
                height: auto;
                max-width: 85%;
                max-height: 85%;
                border-radius: 6px;
            }
        }
        .info {
            display: flex;
            flex-direction: column;
            h3 {
                display: inline-block;
                vertical-align: middle;
                max-width: 100%;
                font-size: 22px;
                color: #2c3e50;
                text-transform: capitalize;
            }
            time {
                color: #9aabb8;
            }
            .msg {
                margin: 5px 0;
            }
            .tag {
                ul {
                    li {
                        display: inline-block;
                        height: 20px;
                        margin-right: 20px;
                        margin-bottom: 15px;
                        a {
                            color: #2c3e50;
                            display: flex;
                            align-items: center;
                            color: #2c3e50;
                            display: flex;
                            align-items: center;
                            background-color: #fbf8f8;
                            padding: 3px 5px;
                            border-radius: 3px;
                            box-sizing: border-box;
                            transition: all 0.3s;
                            &:hover{
                                background-color: #999;
                                i{
                                    color: #fff;
                                }
                                span{
                                    color: #fff;
                                }
                            }
                            i {
                                padding-right: 5px;
                                color: #b8c4ce;
                                font-size: 14px;
                            }
                            span {
                                color: #b8c4ce;
                            }
                        }
                    }
                }
            }
            .mtm {
                margin-top: 10px;
                a {
                    padding: 5px 15px;
                    background-color: #ffd100;
                    border-color: #ffd100;
                    margin-right: 20px;
                    border-radius: 5px;
                    display: inline-block;
                    color: #fff;
                    outline: 0;
                    border: 0;
                    cursor: pointer;
                    font-size: 18px;
                    i {
                        margin-right: 5px;
                    }
                }
                .leave {
                }
                .collect {
                    opacity: 0.6;
                }
            }
        }
    }
    &-author {
    }
}
</style>