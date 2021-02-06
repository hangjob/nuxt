<template>
    <div class="download-popup">
        <el-dialog title="提示" :visible.sync="dialogVisible" :show-close="false" width="30%">
            <div slot="title"></div>
            <div class="container">
                <div class="title">
                    下载地址 - {{detail.name}}
                    <span></span>
                </div>
                <div class="download">
                    <div class="download-img">
                        <img src="@/assets/images/baidupan.svg" alt />
                    </div>
                    <div class="download-body">
                        <h6>
                            <span class="tit">百度网盘</span> (提取码/密码：
                            <span class="pas" @click="focus">{{pas()}}</span> )
                        </h6>
                        <p>百度网盘目前全网没有稳定可用的高速下载工具，建议开超级会员</p>
                    </div>
                </div>
            </div>
            <div slot="footer">
                <div class="bottom">
                    <a href="javascript:;" @click="download">
                        <i style="font-size:18px" class="iconfont icon-xiazai1"></i>前往下载
                    </a>
                </div>
            </div>
        </el-dialog>
        <Attention @successResult="successResult" ref="attention"></Attention>
    </div>
</template>
<script>
let verificationCode = '062'
export default {
    data() {
        return {
            dialogVisible: false,
            detail: {}
        }
    },
    mounted() {
    },
    methods: {
        handleClose() {

        },
        openDialogVisible(obj = {}) {
            this.dialogVisible = true;
            this.detail = obj;
            this.copyDetail = JSON.parse(JSON.stringify(obj))
        },
        pas() {
            if (!process.server) {
                let isAttention = window.localStorage.getItem('isAttention');
                if (isAttention == verificationCode) {
                    if (this.detail.pas) {
                        return this.detail.pas;
                    } else {
                        return '无密码'
                    }
                } else {
                    return '请先关注公众号，戳我'
                }
            }
        },
        focus() {
            this.$refs.attention.openWechat()
        },
        successResult() {
            this.dialogVisible = false;
            this.$nextTick(() => {
                this.openDialogVisible(this.copyDetail);
            })
        },
        download() {
            let isAttention = window.localStorage.getItem('isAttention');
            if (isAttention == verificationCode) {
                window.open(this.detail.win || this.detail.mac);
            } else {
                this.$notify({
                    title: '提示',
                    message: '小可爱，你需要关注公众号才可下载哦！',
                    type: 'warning'
                });
            }
        }
    }
}
</script>
<style lang="less" scoped>
.download-popup /deep/ .el-dialog__header {
    display: none !important;
}
.download-popup /deep/ .el-dialog {
    border-radius: 6px;
}
.download-popup {
    .container {
        margin-top: 15px;
        .title {
            font-size: 20px;
            line-height: 30px;
            color: #111a34;
            font-weight: 400;
            text-align: left;
            span {
                font-size: 14px;
            }
        }
        .download {
            display: flex;
            align-items: center;
            &-img {
                width: 80px;
                height: 80px;
                margin-right: 10px;
            }
            &-body {
                h6 {
                    color: #666;
                    font-size: 16px;
                    margin-bottom: 5px;

                    .tit {
                        color: #333;
                    }
                    .pas {
                        cursor: pointer;
                        color: chartreuse;
                    }
                }
                p {
                    color: #979b9e;
                }
            }
        }
    }
    .bottom {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: -20px;
        a {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 160px;
            max-width: 160px;
            padding: 10px 0;
            border: 1px solid #06a7ff;
            border-radius: 30px;
            text-align: center;
            color: #06a7ff;
            i {
                font-size: 18px;
            }
        }
    }
}
</style>