<template>
    <div class="comment">
        <div class="wp">
            <div class="comment-form">
                <div class="pinlunt">
                    <el-input
                        type="textarea"
                        placeholder="请输入内容"
                        v-model="textarea"
                        maxlength="30"
                        show-word-limit
                        :autosize="{ minRows: 4, maxRows: 6 }"
                    ></el-input>
                </div>
                <div class="expression-box">
                    <span>添加表情</span>
                    <button class="itnavs-btn itnavs-btn-yellow">评论</button>
                </div>
            </div>
            <div class="comment-content">
                <div class="comment-title">全部评论33</div>
                <div class="comment-list">
                    <div class="comment-info-box">
                        <div class="avatar-img">
                            <a href>
                                <img
                                    src="https://img.zcool.cn/community/0434d357280b30000001797059c050.jpg@80w_80h_1c_1e_1o_100sh.jpg"
                                    alt
                                />
                            </a>
                        </div>
                        <div class="avatar-container">
                            <h5>羊先生</h5>
                            <p>我以为会一刀毙命</p>
                            <div class="action">
                                <div>7小时前</div>
                                <div>
                                    <i>评论</i>
                                    <i>赞</i>
                                </div>
                            </div>
                        </div>
                        <div class="quote-content-wrap">
                            <div class="list-covers">
                                <div class="covers-quote">
                                    <div class="avatar-img">
                                        <a href>
                                            <img
                                                src="https://img.zcool.cn/community/0434d357280b30000001797059c050.jpg@80w_80h_1c_1e_1o_100sh.jpg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div class="avatar-container">
                                        <h5>羊先生</h5>
                                        <p>我以为会一刀毙命</p>
                                        <div class="action">
                                            <div>7小时前</div>
                                            <div>
                                                <i>评论</i>
                                                <i>赞</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="list-covers">
                                <div class="covers-quote">
                                    <div class="avatar-img">
                                        <a href>
                                            <img
                                                src="https://img.zcool.cn/community/0434d357280b30000001797059c050.jpg@80w_80h_1c_1e_1o_100sh.jpg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div class="avatar-container">
                                        <h5>羊先生</h5>
                                        <p>我以为会一刀毙命</p>
                                        <div class="action">
                                            <div>7小时前</div>
                                            <div>
                                                <i>评论</i>
                                                <i>赞</i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="comment-list">
                    <div class="comment-info-box">
                        <div class="avatar-img">
                            <a href>
                                <img
                                    src="https://img.zcool.cn/community/0434d357280b30000001797059c050.jpg@80w_80h_1c_1e_1o_100sh.jpg"
                                    alt
                                />
                            </a>
                        </div>
                        <div class="avatar-container">
                            <h5>羊先生</h5>
                            <p>我以为会一刀毙命</p>
                            <div class="action">
                                <div>7小时前</div>
                                <div>
                                    <i>评论</i>
                                    <i>赞</i>
                                </div>
                            </div>
                        </div>
                        <div class="quote-content-wrap">
                            <div class="list-covers">
                                <div class="covers-quote">
                                    <div class="avatar-img">
                                        <a href>
                                            <img
                                                src="https://img.zcool.cn/community/0434d357280b30000001797059c050.jpg@80w_80h_1c_1e_1o_100sh.jpg"
                                                alt
                                            />
                                        </a>
                                    </div>
                                    <div class="avatar-container">
                                        <h5>羊先生</h5>
                                        <p>我以为会一刀毙命</p>
                                        <div class="action">
                                            <div>7小时前</div>
                                            <div>
                                                <i>评论</i>
                                                <i>赞</i>
                                            </div>
                                        </div>
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
export default {
    data() {
        return {
            textarea: ''
        }
    }
}
</script>
<style lang="less" scoped>
.comment {
    margin-top: 20px;
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
                    }
                }
                .quote-content-wrap {
                    width: 100%;
                    margin-top: 28px;
                    background: #f4f4f4;
                    border-radius: 4px;
                    position: relative;
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
                    .list-covers {
                        padding: 20px 30px;
                        box-sizing: border-box;
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