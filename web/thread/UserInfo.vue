<template>
    <div class="userinfo">
        <div class="wp work-details-box-wrap">
            <div class="left-details-head">
                <h2>什么！？刘一刀！还有大圣出没！！！</h2>
                <p class="title-time">
                    <span>1天前</span>发布
                </p>
                <div class="work-head-box">
                    <div class="head-left">
                        <span class="head-index">
                            <span>
                                <a>原创作品</a>
                            </span>
                            <i>/</i>
                            <span>
                                <a>动漫</a>
                            </span>
                            <i>/</i>
                            <span>
                                <a>其他动漫</a>
                            </span>
                            <i>/</i>
                        </span>
                    </div>
                    <div class="head-right">
                        <span class="head-data-show">
                            <a href>
                                <i></i>313
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div class="left-details-author">
                <div class="avatar">
                    <img
                        src="https://img.zcool.cn/community/0434d357280b30000001797059c050.jpg@80w_80h_1c_1e_1o_100sh.jpg"
                        alt
                    />
                </div>
                <div class="author-info">
                    <p class="author-info-title">
                        <a href>author-info-title</a>
                    </p>
                    <p class="position-info">杭州 | 文化娱乐</p>
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