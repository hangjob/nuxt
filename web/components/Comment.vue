<template>
    <div class="comment">
        <div class="wp">
            <div class="comment-form">
                <h2 class="publish">
                    <img v-if="userInfo.userhead" :src="userInfo.userhead" alt />
                    <img v-else src="@/assets/images/userhand.png" alt />
                    <span>发表评论</span>
                </h2>
                <div class="pinlunt">
                    <el-input
                        type="textarea"
                        placeholder="成熟的小建议：友善发言，言之有物"
                        v-model="content"
                        maxlength="2000"
                        show-word-limit
                        :autosize="{ minRows: 6, maxRows: 9 }"
                    ></el-input>
                </div>
                <div class="expression-box">
                    <span>
                        <!-- 添加表情 -->
                    </span>
                    <button class="itnavs-button itnavs-button-yellow" @click="submitData">评论</button>
                </div>
            </div>
            <div class="comment-content">
                <div class="comment-title">全部评论{{items.length ? `(${items.length})` : ''}}</div>
                <div class="comment-list" v-for="item in items" :key="item.id">
                    <div class="comment-info-box">
                        <div class="avatar-img">
                            <a href>
                                <img :src="item.member.userhead" alt />
                            </a>
                        </div>
                        <div class="avatar-container">
                            <h5>{{item.member.username}}</h5>
                            <p v-html="item.content"></p>
                            <div class="action">
                                <div>{{item.create_time}}</div>
                                <div>
                                    <a href="javascript:;" @click="openReply(item)">
                                        <i></i>
                                        评论{{item.revertItems.length ? `(${item.revertItems.length})` : ''}}
                                    </a>
                                    <!-- <a href="javascript:;">
                                        <i></i>
                                        点赞{{item.like}}
                                    </a>-->
                                </div>
                            </div>
                            <Reply
                                :visible="item.isShow"
                                :item="item"
                                :did="item.id"
                                :placeholder="` 回复 ${item.member.username}:`"
                            ></Reply>
                        </div>
                        <div
                            class="quote-content-wrap before"
                            v-if="item.revertItems && item.revertItems.length"
                        >
                            <div
                                class="list-covers"
                                v-for="todo in item.revertItems"
                                :key="todo.id"
                            >
                                <div class="covers-quote">
                                    <div class="avatar-img">
                                        <a href>
                                            <img :src="todo.member.userhead" alt />
                                        </a>
                                    </div>
                                    <div class="avatar-container">
                                        <h5>{{todo.member.username}}</h5>
                                        <p v-html="todo.content"></p>
                                        <div class="action">
                                            <div>{{todo.create_time}}</div>
                                            <div>
                                                <a href="javascript:;" @click="openReply(todo)">
                                                    <i></i>
                                                    评论{{todo.revertItems && todo.revertItems.length ? `(${todo.revertItems.length})` : ''}}
                                                </a>
                                                <!-- <a href="javascript:;">
                                                    <i></i>
                                                    点赞{{todo.like}}
                                                </a>-->
                                            </div>
                                        </div>
                                        <Reply
                                            :visible="todo.isShow"
                                            :item="todo"
                                            :did="item.id"
                                            :placeholder="` 回复 ${todo.member.username}:`"
                                        ></Reply>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { apiDiscussAdd, apiDiscussItems } from '@/api/discuss'
import Reply from './Reply'
const disposeItems = (items) => {
    var handItem = function (item) {
        item.isShow = false;
        if (item.revertItems && item.revertItems.length) {
            item.revertItems.forEach((todo) => {
                todo.isShow = false;
                handItem(todo)
            })
        }
    }
    items.forEach((item) => {
        handItem(item)
    })
    return items;
}
export default {
    props: {
        type: {
            type: Number,
            default: 1
        }
    },
    components: {
        Reply
    },
    computed: {
        userInfo() {
            return this.$store.state.userInfo
        }
    },
    data() {
        return {
            content: '',
            items: []
        }
    },
    mounted() {
        this.apiDiscussItems()
    },
    methods: {
        apiDiscussItems() {
            apiDiscussItems({ fid: this.$route.params.id, type: this.type }).then((res) => {
                let data = disposeItems(res.data);
                this.items = data;
            })
        },
        submitData() {

            if (!this.$store.state.userInfo.userid) {
                this.$notify({
                    title: '评论',
                    message: '小可爱，你还为登录',
                    type: 'warning'
                });
                return false;
            }

            if (!this.content) {
                this.$notify({
                    title: '评论',
                    message: '小可爱，内容不能为空哦！',
                    type: 'warning'
                });
                return false;
            }

            if (!this.$utils.delHtmlTagTrim(this.content)) {
                this.$notify({
                    title: '评论',
                    message: `小可爱，内容不规范`,
                    type: 'warning'
                });
                return false;
            }

            apiDiscussAdd({ fid: this.$route.params.id, type: this.type, content: this.content })
                .then(res => {
                    this.$notify({
                        title: '评论',
                        message: '评论成功',
                        type: 'success'
                    });
                    this.content = '';
                }).catch((err) => {
                    this.$utils.isErrJson(err, this)
                })
        },
        openReply(item) {
            item.isShow = !item.isShow;
        }
    }
}
</script>
<style lang="less" scoped>
.comment {
    margin-top: 20px;
    .publish {
        position: relative;
        width: 100%;
        line-height: 30px;
        padding-bottom: 10px;
        display: flex;
        img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 5px;
        }
        span {
            font-size: 14px;
            text-indent: 5px;
            font-weight: 700;
        }
    }
    &-form {
        background-color: #fff;
        padding: 30px 30px 20px 30px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        overflow: hidden;
        position: relative;
        .expression-box {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 15px;
        }
    }
    &-content {
        background-color: #fff;
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
        overflow: hidden;
        padding: 20px 30px 30px 30px;
        position: relative;
        &::before {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background: #eeeeee;
            position: absolute;
            left: 0;
            top: 0px;
        }
        .comment-title {
        }
        .comment-list {
            padding: 30px 0;
            border-bottom: 1px solid #f1f1f1;
            &:last-child {
                border-bottom: none;
            }
            .comment-info-box {
                padding-left: 68px;
                position: relative;
                .avatar-img {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 48px;
                    height: 48px;
                    display: inline-block;
                    vertical-align: middle;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        border-radius: 50%;
                    }
                }
                .avatar-container {
                    .action {
                        display: flex;
                        justify-content: space-between;
                        a {
                            color: #bbb;
                        }
                    }
                    p {
                        margin-top: 10px;
                    }
                }
                .quote-content-wrap {
                    width: 100%;
                    margin-top: 20px;
                    background: #f4f4f4;
                    border-radius: 4px;
                    position: relative;
                    &.before {
                        &::before {
                            content: '';
                            display: block;
                            border-top: none;
                            border-right: 15px solid transparent;
                            border-bottom: 15px solid #f4f4f4;
                            border-left: 15px solid transparent;
                            position: absolute;
                            top: -12px;
                            left: 15px;
                        }
                    }
                    .list-covers {
                        padding: 20px 30px;
                        box-sizing: border-box;
                        border-bottom: 1px solid #e5e5ee;
                        &:last-child {
                            border-bottom: none;
                        }
                        .covers-quote {
                            position: relative;
                            padding-left: 68px;
                        }
                    }
                }
            }
        }
    }
}
</style>