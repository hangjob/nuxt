<template>
    <div class="footer">
        <div class="footer-container wp">
            <p class="darkgray slogan">互联网职员，找导航，就上 全栈导航</p>
            <p>
                友情链接：
                <a href="https://www.vipbic.com/" target="_blank">Vipbic</a>
                <span>|</span>
                <a href="http://search.vipbic.com/" target="_blank">凡间搜索</a>
                <span>|</span>
                <a style="color:#5ebdb9">查看所有</a>
            </p>
            <p class="darkgray">
                <a href="https://www.vipbic.com/about.html" target="_blank">联系站长</a> |
                <a>手机微信扫一扫</a> |
                <a>吐个槽</a>
            </p>
            <p class="darkgray">Copyrights © 2019-2021. All rights reserved <a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备17016349号-3</a></p>
            <p class="darkgray">小提示：按 Ctrl+D 可收藏本网页，方便下一次快速打开使用。</p>
            <p class="darkgray">小提示：打开浏览器的 '设置页面' 找到 '启动时' 选项下面的 '打开特定网页或一组网页'，就可以把全栈导航设置为首页啦</p>
        </div>
        <div
            class="recruit"
        >本站创建于2020年05月07日，已经在互联网的长河游行了{{date.day}}天，Meeting you has been my honor ，我等你很久了~</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            date: {
                day: ''
            }
        }
    },
    mounted() {
        var date1 = new Date("07/05/2020");
        var date2 = new Date();
        var Difference_In_Time = date2.getTime() - date1.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        this.date.day = parseInt(Difference_In_Days)
    }
}
</script>
<style lang="less" scoped>
.footer {
    padding: 10px 0 0;
    background-color: #00102af2;
    text-align: center;
    margin-top: 30px;
    min-width: 1300px;
    &-container {
        position: relative;
        p {
            color: #a0a4af;
            font-size: 12px;
            line-height: 26px;
            span {
                color: #6b7386;
                font-size: 12px;
                display: inline-block;
                margin: 0 5px;
            }
            a {
                color: #a0a4af;
                font-size: 12px;
            }
        }
        .darkgray {
            color: #6b7386;
            a {
                color: #6b7386;
            }
        }
        .slogan {
            position: absolute;
            right: 0;
        }
    }
    .recruit {
        background-color: #00102a;
        padding: 5px 0;
        color: #6b7386;
        font-size: 12px;
    }
}
</style>