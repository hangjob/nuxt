<template>
    <div class="pagelist">
        <div class="pagelist-items">
            <template v-for="(item,index) in listData">
                <div :key="index">
                    <div class="item" v-for="todo in item.navtag" :key="todo.id">
                        <div class="item-thumb hidden-xs">
                            <nuxt-link
                                :to="$utils.navLink(todo)"
                                v-if="!todo.pic"
                                class="big"
                                :style="{backgroundColor:todo.author.color}"
                            >
                                <img :src="todo.icon" :alt="todo.describe" :title="todo.title" />
                            </nuxt-link>
                            <nuxt-link :to="$utils.navLink(todo)" v-else>
                                <img :src="todo.pic" :alt="todo.describe" :title="todo.title" />
                            </nuxt-link>
                        </div>
                        <div class="item-content">
                            <nuxt-link  class="a_block" :to="$utils.navLink(todo)">
                                <h2 class="title">{{todo.it_name}}</h2>
                                <p>{{todo.describe}}</p>
                            </nuxt-link>
                            <h4>
                                <span class="time">
                                    <i class="fa fa-clock-o"></i>
                                    {{$dayjs(todo.create_time).format('MM月DD日 YYYY年')}}
                                </span>
                                <span class="author">
                                    <i class="fa fa-user-circle"></i>羊先生
                                </span>
                                <span class="tags">
                                    <a
                                        href="javascript:;"
                                        v-for="(evto,j) in todo.keywords"
                                        :key="j"
                                    >{{evto}}</a>
                                </span>
                            </h4>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        listData: {
            type: Array,
            default: () => []
        }
    },
}
</script>
<style lang="less" scoped>
.pagelist {
    margin-top: 30px;
    &-items {
        width: 980px;
        overflow: hidden;
        .item {
            margin-bottom: 15px;
            padding: 20px;
            background: #fff;
            transition: all 0.2s;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            justify-content: flex-start;
            border-radius: 6px;
            &-thumb {
                width: 260px;
                margin: 0 30px 0 0;
                flex-shrink: 0;
                max-height: 140px;
                min-height: 140px;
                a {
                    border-radius: 3px;
                    position: relative;
                    display: block;
                    height: 100%;
                    overflow: hidden;
                    img {
                        width: 100%;
                        transition: all 0.3s;
                        object-fit: cover;
                        height: 100%;
                        &:hover {
                            transform: scale(1.06);
                        }
                    }
                }
                .big {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img {
                        width: auto;
                        height: auto;
                        max-width: 85%;
                        max-height: 85%;
                        border-radius: 5px;
                    }
                }
            }
            &-content {
                flex-grow: 1;
                text-align: left;
                a {
                    display: block;
                    transition: all 0.2s;
                    h2 {
                        font-size: 20px;
                        font-weight: bold;
                        line-height: 30px;
                        margin-bottom: 20px;
                        margin-top: 0;
                        color: #333;
                    }
                    p {
                        font-size: 14px;
                        color: #888;
                        line-height: 24px;
                        height: 48px;
                        overflow: hidden;
                        margin-bottom: 14px;
                        max-width: 615px;
                    }
                }
                h4 {
                    font-size: 12px;
                    font-weight: normal;
                    color: #a7a7a7;
                    line-height: 23px;
                    height: 23px;
                    overflow: hidden;
                    .time,
                    .author {
                        i {
                            margin-right: 5px;
                        }
                        margin-right: 10px;
                    }
                    .tags {
                        a {
                            display: inline-block;
                            padding: 0 5px;
                            margin: 0 5px;
                            background: #fbfbfd;
                            border-radius: 3px;
                            color: #a7a7a7;
                            &:hover {
                                background-color: #09c15f;
                                color: #ffffff;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>