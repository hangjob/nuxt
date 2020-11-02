<template>
    <div class="main-banner wp">
        <div class="banner-ia">
            <h3>嘿，加入我们吧！</h3>
            <p>免费下载全站素材，为您下一个项目搜集丰富的素材！</p>
        </div>
        <div class="banner-ib">
            <i class="iconfont icon-qushi"></i>
            <h3>221580</h3>
            <p style="margin-bottom: 20px;">资源总数</p>
            <p>互联网职员，找导航，就上全栈导航</p>
            <div class="banner-more">
                <span>查看所有</span>
                <i class="iconfont icon--_jiantou"></i>
            </div>
        </div>
        <div class="banner-ic">
            <div class="update-number">
                <div class="number-top">
                    <div class="total">30</div>
                    <div class="change">
                        <p>
                            <span>+10</span>
                        </p>
                        <p class="new-work">上一周新增</p>
                    </div>
                    <div class="arrows">
                        <i class="iconfont icon--_jiantou"></i>
                    </div>
                </div>
                <div class="number-slogan">小步快跑，每日更新！</div>
            </div>
            <div class="update-number">
                <div class="number-top">
                    <div class="total">313</div>
                    <div class="change">
                        <p>
                            <span>+32</span>
                        </p>
                        <p class="new-work">注册用户</p>
                    </div>
                    <div class="arrows">
                        <i class="iconfont icon--_jiantou"></i>
                    </div>
                </div>
                <div class="number-slogan">有小可爱加入我们</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.main-banner {
    display: flex;
    .banner-ia {
        width: 590px;
        height: 300px;
        background: #fff url(~@/assets/images/adEBooks.png) no-repeat center bottom;
        text-align: center;
        border-radius: 6px;
        margin-right: 20px;
        h3 {
            font-size: 38px;
            line-height: 40px;
            font-weight: 700;
            color: #71c496;
            margin: 30px 0;
            background: -webkit-linear-gradient(bottom, #458dd1, #2bafc1);
            background-clip: border-box;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        p {
            font-size: 12px;
            line-height: 16px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.3em;
            color: #505050;
            margin: 0;
        }
    }
    .banner-ib {
        position: relative;
        &::before {
            content: '';
            position: absolute;
            z-index: 0;
            border-radius: 5px;
            top: 1px;
            right: 1px;
            bottom: 1px;
            left: 1px;
            background-color: #fff;
            transition: opacity 0.25s ease-in-out;
            opacity: 0;
        }
        &:hover:before {
            opacity: 1;
        }
        &:hover {
            h3 {
                color: #4772d9;
                background: -webkit-linear-gradient(bottom, #458dd1, #2bafc1);
                background-clip: border-box;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            p {
                color: #282828;
                opacity: 0.4;
            }
            .banner-more {
                span {
                    color: #2bafc1;
                }
                i {
                    color: #2bafc1;
                }
            }
        }
        background: linear-gradient(
            to bottom right,
            rgba(71, 114, 217, 0.92),
            rgba(109, 71, 217, 0.92)
        );
        position: relative;
        border-radius: 6px;
        text-align: center;
        color: #282828;
        width: 340px;
        height: 300px;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: 30px;
        i {
            color: #00dcaf;
            font-size: 36px;
            z-index: 1;
        }
        h3 {
            font-size: 50px;
            line-height: 40px;
            font-weight: 600;
            letter-spacing: -0.015em;
            display: block;
            transition: all 0.25s ease-in-out;
            margin-bottom: 5px;
            color: #fff;
            z-index: 1;
        }
        p {
            font-size: 12px;
            line-height: 18px;
            font-weight: 600;
            letter-spacing: 0.075em;
            text-transform: uppercase;
            opacity: 0.6;
            color: #fff;
            letter-spacing: 0.16em;
            margin: 5px 0;
            z-index: 1;
        }
        .banner-more {
            display: flex;
            align-items: center;
            bottom: 0;
            font-weight: inherit;
            font-style: inherit;
            letter-spacing: 0;
            font-size: 12px;
            line-height: 18px;
            font-weight: 600;
            letter-spacing: 0.075em;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translate(-50%);
            color: #fff;
            opacity: 0.6;
            i {
                font-size: 25px;
                color: #fff;
            }
        }
    }
    .banner-ic {
        display: flex;
        flex-direction: column;
        .update-number {
            background: linear-gradient(
                    135deg,
                    rgba(71, 114, 217, 0.92),
                    rgba(0, 220, 175, 0.92)
                ),
                url(~@/assets/images/mdbg.svg) no-repeat 50%;
            position: relative;
            border-radius: 6px;
            color: #282828;
            display: flex;
            flex-direction: column;
            flex-basis: 100%;
            height: 120px;
            box-sizing: border-box;
            padding: 30px;
            width: 330px;
            margin-bottom: 20px;
            &::before {
                content: '';
                position: absolute;
                z-index: 0;
                border-radius: 5px;
                top: 1px;
                right: 1px;
                bottom: 1px;
                left: 1px;
                background-color: #fff;
                transition: opacity 0.25s ease-in-out;
                opacity: 0;
            }
            &:hover:before {
                opacity: 1;
            }
            &:hover {
                .number-top {
                    .total {
                        color: #4772d9;
                        background: -webkit-linear-gradient(
                            bottom,
                            #458dd1,
                            #2bafc1
                        );
                        background-clip: border-box;
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }
                    .change {
                        p.new-work {
                            color: #282828;
                            opacity: 0.4;
                        }
                    }
                    .arrows {
                        color: #2bafc1;
                    }
                }
                .number-slogan {
                    color: #282828;
                    opacity: 0.4;
                }
            }
            .number-top {
                display: flex;
                align-items: center;
                z-index: 1;
                .total {
                    font-weight: inherit;
                    font-style: inherit;
                    letter-spacing: 0;
                    font-size: 42px;
                    line-height: 40px;
                    font-weight: 600;
                    letter-spacing: -0.015em;
                    display: block;
                    color: #fff;
                    transition: all 0.25s ease-in-out;
                }
                .change {
                    flex: 1;
                    p {
                        font-weight: inherit;
                        font-style: inherit;
                        letter-spacing: 0;
                        font-size: 12px;
                        line-height: 24px;
                        font-weight: 600;
                        letter-spacing: 1px;
                        color: #00dcaf;
                        display: block;
                        margin: 0 0 -5px 5px;
                        span {
                            letter-spacing: 0.075em;
                            color: #00dcaf;
                            font-size: 16px;
                        }
                    }
                    p.new-work {
                        display: inline-block;
                        opacity: 0.6;
                        margin-left: 5px;
                        color: #fff;
                    }
                }
                .arrows {
                    color: #fff;
                    font-size: 26px;
                }
            }
            .number-slogan {
                color: #282828;
                opacity: 0.6;
                position: absolute;
                bottom: 25px;
                left: 30px;
                color: #fff;
                text-transform: uppercase;
                letter-spacing: 0.16em;
                font-weight: 600;
                font-size: 12px;
            }
            &:last-child {
                background: linear-gradient(
                        135deg,
                        rgba(109, 71, 217, 0.92),
                        rgba(249, 61, 102, 0.92)
                    ),
                    url(~@/assets/images/mdbg.svg) no-repeat 50%;
                margin-bottom: 0;
            }
        }
    }
}
</style>