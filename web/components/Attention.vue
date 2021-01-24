<template>
    <div class="attention">
        <el-dialog
            title="登录"
            :visible.sync="visible"
            width="940px"
            :show-close="true"
            :close-on-click-modal="false"
        >
            <div slot="title"></div>
            <div class="attention-center">
                <div class="sidebar">
                    <h2>全栈导航</h2>
                    <ul>
                        <li>
                            <i class="icon-option"></i> 全站1500+精选网址
                        </li>
                        <li>
                            <i class="icon-option"></i> 每日更新！搜索聚集互联网的优秀资源
                        </li>
                        <li>
                            <i class="icon-option"></i> 专注分享产品运营、产品经理、UI设计师、前端开发工程师、后端开发工程师
                        </li>
                        <li>
                            <i class="icon-option"></i> 互联网职员，找导航，就上 全栈导航
                        </li>
                    </ul>
                </div>
                <div class="main">
                    <h2>扫码关注</h2>
                    <div class="main-content">
                        <h4>扫码 关注vipbic公众号 每日更新</h4>
                    </div>
                    <div class="main-code">
                        <img src="@/assets/images/code.png" alt />
                    </div>
                    <div class="main-protocol">
                        <p>
                            互联网职员，找导航，就上全栈导航
                            <br />
                            <a href="https://www.itnavs.com/">https://www.itnavs.com/</a>
                        </p>
                    </div>
                </div>
                <div class="close">
                    <i @click="visible = false" class="iconfont icon-guanbi"></i>
                </div>
            </div>
            <div class="attention-bottom" slot="footer"></div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            visible: false
        }
    },
}
</script>
<style lang="less" scoped>
.attention /deep/ .el-dialog {
    border-radius: 6px;
    overflow: hidden;
}
.attention /deep/ .el-dialog__body {
    padding-top: 10px;
}
.attention /deep/ .el-dialog__header {
    display: none;
}
.attention /deep/ .el-dialog__footer {
    display: none;
}
.attention /deep/ .el-dialog__body {
    padding: 0;
}
.attention {
    height: 100%;
    &-center {
        display: flex;
        position: relative;
        flex-direction: row;
        height: 540px;
        .sidebar {
            width: 400px;
            padding: 50px 50px 0;
            color: #fff;
            background-color: #ffd100;
            box-sizing: border-box;
            h2 {
                font-size: 22px;
                margin-bottom: 30px;
            }
            ul {
                li {
                    display: block;
                    margin-bottom: 25px;
                    font-size: 15px;
                }
            }
            background-image: url(~@/assets/images/uiii-001.png);
            background-position: 146px bottom;
            background-repeat: no-repeat;
        }
        .main {
            flex: 1;
            h2 {
                font-size: 20px;
                line-height: 1;
                margin-bottom: 30px;
                padding: 30px 0 20px;
                font-weight: 400;
                border-bottom: 1px solid #f2f2f2;
                text-align: center;
                color: #3385ff;
            }
            &-content {
                h4 {
                    font-size: 14px;
                    padding: 10px 8px 8px;
                    background: #f6f6f6;
                    color: #777;
                    margin: 0 20px;
                    border-radius: 30px;
                    text-align: center;
                }
            }
            &-code {
                width: 300px;
                text-align: center;
                margin: 20px auto;
            }
            &-protocol {
                color: #777777;
                text-align: center;
            }
        }
        .close {
            position: absolute;
            right: 10px;
            top: 5px;
            i {
                cursor: pointer;
                transition: all 0.3s;
                display: inline-block;
                &:hover {
                    transform: rotate(180deg);
                }
            }
        }
    }
}
</style>