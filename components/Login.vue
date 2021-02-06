<template>
    <div class="login">
        <el-dialog
            title="登录"
            :visible.sync="visible"
            width="450px"
            :show-close="true"
            :close-on-click-modal="false"
        >
            <div slot="title"></div>
            <div class="login-center">
                <div class="login-center-slogan">
                    <span>不正经的话题区</span>
                </div>
                <div class="login-center-item">
                    <div class="login-center-item-short">
                        <input
                            type="text"
                            name="usermail"
                            v-model="loginData.usermail"
                            placeholder="输入你的邮箱"
                            value
                            maxlength="30"
                            autocomplete="off"
                        />
                    </div>
                    <div class="login-center-item-short">
                        <input
                            :type="lock ? 'password' : 'text'"
                            name="password"
                            @keyup.enter="login"
                            v-model="loginData.password"
                            placeholder="密码6~16位数字、大小写字母或常用符号"
                            value
                            maxlength="16"
                            autocomplete="off"
                        />
                        <span @click="lock = !lock">
                            <i class="iconfont icon-mima1" v-if="lock"></i>
                            <i class="iconfont icon-mima" v-else></i>
                        </span>
                    </div>
                </div>
            </div>
            <div class="login-bottom" slot="footer">
                <button class="itnavs-button" @click="login" :disabled="disabled">登录</button>
                <p>
                    还没加入 全栈导航 ？马上去
                    <a href="javascript:;" @click="registerOpen">注册</a>
                </p>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import randomNickname from '@/utils/name.js'
import { apiLogin, apiLoginUserinfo } from '@/api/login'
export default {
    data() {
        return {
            loginData: {
                usermail: '1234567@qq.com',
                password: '1234567'
            },
            lock: true,
            disabled: false,
            visible: false
        }
    },
    created() {
        this.apiLoginUserinfo();
    },
    methods: {
        randomNickname() {
            this.registerData.username = randomNickname()
        },
        registerOpen() {
            this.$emit('registerOpen')
        },
        // 登录
        login() {
            if (!this.$utils.isEmail(this.loginData.usermail)) {
                this.$message({
                    message: '小可爱，你输入的邮箱貌似不合法',
                    type: 'warning'
                });
                return false;
            }
            if (String(this.loginData.password).length < 6) {
                this.$message({
                    message: '小可爱，密不规范哦',
                    type: 'warning'
                });
                return false;
            }
            apiLogin(this.loginData)
                .then((res) => {
                    this.$notify({
                        title: res.data.username,
                        message: '登录成功',
                        type: 'success'
                    });
                    this.visible = false;
                    this.$store.commit('setUserInfo', res.data)
                }).catch((err) => {
                    this.$utils.isErrJson(err)
                })
        },
        apiLoginUserinfo() {
            apiLoginUserinfo()
                .then((res) => {
                    this.$store.commit('setUserInfo', res.data)
                })
        }
    }
}
</script>
<style>
.v-modal {
    opacity: 0.65;
}
</style>
<style lang="less" scoped>
.login /deep/ .el-dialog {
    border-radius: 6px;
}
.login /deep/ .el-dialog__body {
    padding-top: 10px;
}
.login {
    &-close {
        padding: 8px;
        i {
            font-size: 12px;
            color: #999;
        }
        &:hover i {
            color: #f8aa00;
        }
    }
    &-center {
        margin-top: 30px;
        &-slogan {
            margin-top: 10px;
            text-align: center;
            span {
                font-size: 24px;
                color: #4b4c4d;
                padding: 0 2px;
                display: inline-block;
                position: relative;
                line-height: 24px;
                &::before {
                    content: '';
                    width: 100px;
                    height: 3px;
                    position: absolute;
                    left: -100px;
                    top: 50%;
                    margin-top: -1.5px;
                    border-radius: 3px;
                    background: linear-gradient(
                        to left,
                        rgba(249, 173, 7, 0.8),
                        rgba(255, 255, 255, 0.8)
                    );
                }
                &::after {
                    content: '';
                    width: 100px;
                    height: 3px;
                    position: absolute;
                    right: -100px;
                    top: 50%;
                    margin-top: -1.5px;
                    border-radius: 3px;
                    background: linear-gradient(
                        to right,
                        rgba(249, 173, 7, 0.8),
                        rgba(255, 255, 255, 0.8)
                    );
                }
            }
        }
        &-type {
            margin-top: 40px;
            span {
                font-size: 15px;
                color: #f8aa00;
            }
        }
        &-item {
            &-short {
                width: 100%;
                height: 44px;
                border: 1px solid #eaeaea;
                position: relative;
                margin-top: 24px;
                display: flex;
                input {
                    height: 44px;
                    line-height: 44px;
                    border: 0 none;
                    outline: 0;
                    background: 0 0;
                    text-indent: 14px;
                    overflow: hidden;
                    font-size: 14px;
                    width: 85%;
                }
                span {
                    display: inline-block;
                    width: 15%;
                    height: 100%;
                    text-align: center;
                    line-height: 44px;
                    vertical-align: top;
                    border-left: 1px solid #eaeaea;
                    cursor: pointer;
                    i {
                        color: #f8aa00;
                        transition: all 0.3s;
                        display: inline-block;
                    }
                }
                .route:active i {
                    transform: rotate(180deg);
                }
            }
        }
    }
    &-bottom {
        width: 100%;
        text-align: center;
        button {
            width: 100%;
            padding: 12px 22px;
            text-align: center;
            border-radius: 2px;
            border: 1px solid #f8aa00;
            cursor: pointer;
            -webkit-transition: all 0.2s ease-in-out;
            transition: all 0.2s ease-in-out;
            color: #fff;
            background-color: #f8aa00;
            font-size: 16px;
        }
        p {
            margin: 20px 0 10px 0;
            font-size: 14px;
            color: #969696;
            a {
                color: #f8aa00;
                border: 0 none;
                cursor: pointer;
                background-color: transparent;
            }
        }
        &-qq {
            display: inline-block;
            img {
                width: 60px;
                cursor: pointer;
            }
        }
    }
}
</style>