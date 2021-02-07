<template>
    <div class="banner">
        <div class="hot-slider">
            <div class="bd">
                <ul class="clearfix">
                    <li v-for="item in dataImage" :key="item.id">
                        <nuxt-link to="/figure">
                            <img :src="item.img" />
                        </nuxt-link>
                    </li>
                </ul>
            </div>
            <div class="hd">
                <ul></ul>
            </div>
            <div class="pnBtn prev">
                <span class="blackBg"></span>
                <a class="arrow" href="javascript:void(0)"></a>
            </div>
            <div class="pnBtn next">
                <span class="blackBg"></span>
                <a class="arrow" href="javascript:void(0)"></a>
            </div>
        </div>
    </div>
</template>
<script>
import { apiFigureBans } from '@/api/figure'
export default {
    data() {
        return {
            dataImage: [],
        }
    },
    created() {

    },
    mounted() {
        this.apiFigureBans();
    },
    methods: {
        apiFigureBans() {
            apiFigureBans().then((res) => {
                this.dataImage = res.data;
                this.$nextTick(() => {
                   this.initBanner();
                })
            })
        },
        initBanner() {
            $(document).ready(function () {
                /* 设置第一张图片 */
                $(".hot-slider .bd li").first().before($(".hot-slider .bd li").last());

                /* 鼠标悬停箭头按钮显示 */
                $(".hot-slider").hover(function () {
                    $(this).find(".arrow").stop(true, true).fadeIn(300)
                }, function () {
                    $(this).find(".arrow").fadeOut(300)
                });

                /* 滚动切换 */
                $(".hot-slider").slide({
                    titCell: ".hd ul",
                    mainCell: ".bd ul",
                    effect: "leftLoop",
                    autoPlay: false,
                    vis: 3,
                    autoPage: true,
                    trigger: "click"
                });
            });
        }
    }
}
</script>
<style lang="less">
.banner {
    margin-top: -10px;
    .hot-slider {
        width: 100%;
        min-width: 980px;
        height: 335px;
        position: relative;
        overflow: hidden;
        background: #fff;
        text-align: center;
    }
    .hot-slider .bd {
        width: 980px;
        position: absolute;
        left: 50%;
        margin-left: -490px;
    }
    .hot-slider .bd li {
        width: 980px;
        overflow: hidden;
        list-style: none;
    }
    .hot-slider .bd li img {
        display: block;
        width: 980px;
        height: 335px;
        object-fit: cover;
    }
    .hot-slider .tempWrap {
        overflow: visible !important;
    }
    .hot-slider .tempWrap ul {
        margin-left: -980px !important;
    }
    .hot-slider .hd {
        position: absolute;
        width: 100%;
        left: 0;
        z-index: 1;
        height: 8px;
        bottom: 20px;
        text-align: center;
    }
    .hot-slider .hd li {
        display: inline-block;
        *display: inline;
        zoom: 1;
        width: 8px;
        height: 8px;
        list-style: none;
        line-height: 99px;
        overflow: hidden;
        background: url('~@/assets/superslide/slider-btn.png') 0 -10px no-repeat;
        margin: 0 5px;
        cursor: pointer;
        filter: alpha(opacity=60);
        opacity: 0.6;
    }
    .hot-slider .hd li.on {
        background-position: 0 0;
        filter: alpha(opacity=100);
        opacity: 1;
    }
    .hot-slider .pnBtn {
        position: absolute;
        z-index: 1;
        top: 0;
        width: 100%;
        height: 335px;
        cursor: pointer;
    }
    .hot-slider .prev {
        left: -50%;
        margin-left: -490px;
    }
    .hot-slider .next {
        left: 50%;
        margin-left: 490px;
    }
    .hot-slider .pnBtn .blackBg {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 335px;
        background: #000;
        filter: alpha(opacity=50);
        opacity: 0.5;
    }
    .hot-slider .pnBtn .arrow {
        display: none;
        position: absolute;
        top: 0;
        z-index: 1;
        width: 60px;
        height: 335px;
    }
    .hot-slider .pnBtn .arrow:hover {
        filter: alpha(opacity=60);
        opacity: 0.6;
    }
    .hot-slider .prev .arrow {
        right: 0;
        background: url('~@/assets/superslide/slider-arrow.png') -120px 0 no-repeat;
    }
    .hot-slider .next .arrow {
        left: 0;
        background: url('~@/assets/superslide/slider-arrow.png') 0 0 no-repeat;
    }
}
</style>