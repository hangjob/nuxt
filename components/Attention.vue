<template>
    <div class="attention">
        <el-dialog
            title="扫码获取验证码"
            :visible.sync="dialogVisible"
            width="600px"
            :close-on-click-modal="false"
        >
            <div class="attention__img">
                <img src="@/assets/images/gzh.gif" alt />
                <h5>
                    扫码关注，回复
                    <span>“验证码”</span>，极刻获得所有访问权限
                    <br />小可爱，如果你不想关注，按键盘ESC即可关闭
                </h5>
            </div>
            <div class="attention__input">
                <el-input
                    placeholder="小可爱请输入验证码😀"
                    v-model="attentionVal"
                    class="input-with-select"
                    @keyup.enter.native="verification"
                >
                    <template slot="prepend">验证码</template>
                    <el-button slot="append" @click="verification">点击验证</el-button>
                </el-input>
            </div>
            <span slot="footer" class="dialog-footer"></span>
        </el-dialog>
    </div>
</template>
<script>
let verificationCode = '062'
export default {
    props: {
        url: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            dialogVisible: false,
            attentionVal: '',
        }
    },
    methods: {
        verification() {
            if (this.attentionVal == verificationCode) {
                window.localStorage.setItem('isAttention', this.attentionVal);
                if (this.$listeners['successResult']) {
                    this.dialogVisible = false;
                    this.$emit('successResult');
                } else {
                    this.$notify({
                        title: '验证成功',
                        message: '1秒中后跳转',
                        type: 'success'
                    });
                    this.dialogVisible = false;
                    setTimeout(() => {
                        window.open(this.url);
                    }, 300)
                }

            } else {
                this.$message({
                    message: this.attentionVal ? '验证码有误' : '验证码不能为空',
                    type: 'warning'
                });
            }
        },
        openWechat() {
            let isAttention = window.localStorage.getItem('isAttention');
            if (isAttention == verificationCode) {
                if (this.$listeners['successResult']) {
                    this.dialogVisible = false;
                    this.$emit('successResult');
                } else {
                    window.open(this.url);
                }
            } else {
                this.dialogVisible = true;
            }
        }
    }
}
</script>
<style lang="less" scoped>
.attention /deep/ .el-dialog {
    border-radius: 5px;
}
.attention__img {
    box-sizing: border-box;
    background-color: #f0f0f7;
    padding: 30px;
    border-radius: 10px;
    text-align: center;
    margin-bottom: 20px;
}
.attention__img img {
    width: 100%;
    border-radius: 5px;
}
.attention__img h5 {
    color: #333d53;
    margin-top: 20px;
    line-height: 22px;
}
.attention__img h5 span {
    color: #67c23a;
}
</style>