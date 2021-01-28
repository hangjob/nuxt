<template>
    <div class="casually">
        <div class="title">
            <h2>
                <i></i>随便看看
            </h2>
        </div>
        <div class="list">
            <ul>
                <li v-for="item in items" :key="item.id">
                    <nuxt-link :to="'/article/'+item.id">
                        <div class="thumb">
                            <img :src="item.pic" alt />
                        </div>
                        <div class="des">
                            <h2>{{item.title}}</h2>
                            <time>{{item.create_time}}</time>
                        </div>
                    </nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>
<style lang="less" scoped>
.casually {
    border-radius: 6px;
    background-color: #fff;
    overflow: hidden;
    margin-top: 10px;
    .title {
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        padding: 8px 10px;
    }
    .list {
        ul {
            li {
                font-size: 13px;
                padding: 10px;
                border-top: 1px solid #f3f3f3;
                a {
                    display: flex;
                    .thumb {
                        width: 83px;
                        height: 51px;
                        border-radius: 4px;
                        overflow: hidden;
                        margin-right: 5px;
                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                    .des {
                        height: 60px;
                        flex: 1;
                        h2 {
                            font-size: 13px;
                            display: inline-block;
                            white-space: nowrap;
                            width: 100%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            color: rgba(0, 0, 0, 0.8);
                            &:hover{
                                text-decoration: underline;
                            }
                        }
                        time {
                            font-size: 12px;
                            color: #bcbcbc;
                            margin-top: 5px;
                        }
                    }
                }
            }
        }
    }
}
</style>