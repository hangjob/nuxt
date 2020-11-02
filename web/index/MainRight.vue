<template>
    <div class="main-right">
        <div class="right-join">
            <div class="join-top">
                <img src="@/assets/images/logo-44.png" alt />
                <h1>全栈导航</h1>
            </div>
            <div class="join-slogan">
                <p>
                    全栈导航一个分享互联网优秀资源的导航网站，专注分享产品运营、产品经理、UI设计师、前端开发工程师、后端开发工程师，为互联网职员收录国内外优质网站。互联网职员，找导航，就上
                    <a>全栈导航</a>
                </p>
            </div>
            <div class="join-action">
                <a href>订阅公众号</a>
                <a class>发表收录</a>
            </div>
        </div>
        <div class="right-activity">
            <img
                src="https://reviveimg.hellorf.com/www/images/44f41f9110381f25067a1c830ff3e5cc.jpg"
                alt
            />
            <img
                src="https://www.vipbic.com/uploads/20191219/61ffd5059414a6c62635407909912304.jpg"
                alt
            />
        </div>
        <Tags></Tags>
    </div>
</template>
<script>
import Tags from './components/Tags'
export default {
    components: {
        Tags
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.main-right {
    margin-top: 20px;
    width: 460px;
    .right-join {
        background: #fff;
        border-radius: 6px;
        min-height: 30px;
        height: 100%;
        position: relative;
        margin-bottom: 20px;
        min-height: 100px;
        border-top: 2px solid #f9be00;
        .join-top {
            display: flex;
            padding: 10px 15px;
            box-shadow: none;
            border-radius: 0;
            align-items: center;

            border-bottom: 1px solid rgba(34, 36, 38, 0.1);
            img {
                width: 45px;
                border-radius: 5px;
                margin-right: 10px;
            }
            h1 {
                font-size: 16px;
                font-weight: 500;
                color: #777;
            }
        }
        .join-slogan {
            padding: 15px;
            p {
                color: #777;
                font-size: 13px;
                line-height: 25px;
                letter-spacing: 1px;
                opacity: 0.7;
                text-align: justify;
            }
        }
        .join-action {
            display: flex;
            justify-content: space-around;
            padding: 15px 10px;
            border-top: 1px solid rgba(0, 0, 0, 0.05);
            a {
                display: inline-block;
                text-align: center;
                padding: 10px 30px;
                border: 1px solid rgba(0, 0, 0, 0.05);
                border-radius: 5px;
                color: #777;
            }
        }
    }
    .right-activity {
        img {
            width: 100%;
            height: 115px;
            object-fit: cover;
            border-radius: 6px;
            margin-bottom: 10px;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>