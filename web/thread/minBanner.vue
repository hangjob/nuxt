<template>
    <div class="min-banner">
        <div v-swiper="swiperOption" ref="bannerSwiper">
            <div class="swiper-wrapper">
                <div v-for="(item, index) in dataImage" :key="index" class="swiper-slide">
                    <div class="item">
                        <nuxt-link :to="$utils.navLink(item)">
                            <img :src="item.pic" :alt="item.describe" />
                        </nuxt-link>
                        <div class="des">
                            <p><span>{{item.it_name}}</span>-{{item.describe}}</p>
                        </div>
                        <div class="widget2 iconfont"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        dataImage: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            swiperOption: {
                spaceBetween: 0,
                speed: 1200,
                lazy: {
                    loadPrevNext: true
                },
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                loop: true
            }
        }
    }
}
</script>
<style lang="less" scoped>
.min-banner {
    .item {
        width: 100%;
        position: relative;
        background-color: #fff;
        a {
            display: inline-block;
            height: 150px;
            img {
                object-fit: cover;
                width: 100%;
                height: 100%;
                border-top-right-radius: 6px;
                border-top-left-radius: 6px;
            }
        }
        .des {
            padding: 15px;
            p {
                span{
                    font-weight: bold;
                }
                font-size: 17px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
            }
        }
    }
}
</style>