<template>
    <div class="topbg" id="topbg">
        <div class="wp">
            <div class="topbg-content">
                <h2>{{detail.name}}</h2>
                <p>{{detail.des}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        detail: {
            type: Object,
            default: () => { }
        }
    },
    mounted() {
        function loadStyleString(css) {
            var style = document.createElement("style");
            style.type = "text/css";
            try {
                style.appendChild(document.createTextNode(css));
            } catch (ex) {
                style.styleSheet.cssText = css;
            }
            var head = document.getElementsByTagName('head')[0];
            head.appendChild(style);
        }
        loadStyleString('');
        document.head.getElementsByTagName('style')[1].innerHTML = "#topbg::before{background-image: url(" + this.detail.pic + ");}";
    }
}
</script>
<style lang="less" scoped>
.topbg {
    height: 200px;
    color: #fff;
    position: relative;
    margin-top: -10px;
    background: hsla(0, 0%, 100%, 0.3);
    overflow: hidden;
    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        filter: blur(7px);
        margin: -10px;
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: cover;
        background-image: url(https://www.vipbic.com/uploads/20200804/8b9c579df614f717128a5939ac6ba6a3.jpg);
    }
    &-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 200px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        h2 {
            font-size: 30px;
            font-weight: 700;
            letter-spacing: 5px;
        }
        p {
            z-index: 1;
            font-size: 14px;
            text-shadow: 0.1em 0.1em 0.2em #453b3f;
            letter-spacing: 2px;
        }
    }
}
</style>