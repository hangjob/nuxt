<template>
    <div class="space-swiper">
        <div class="wp">
            <div class="space-swiper-banner itnavs-banner">
                <div v-swiper="swiperOption" ref="bannerSwiper">
                    <div class="swiper-wrapper">
                        <div v-for="(item, index) in dataImage" :key="index" class="swiper-slide">
                            <div class="item">
                                <div class="item-card-img">
                                    <nuxt-link to="/figure">
                                        <img :src="item.img" :alt="item.title" />
                                    </nuxt-link>
                                </div>
                                <!-- <div class="item-card-title">
                                    <a href="/figure">{{item.title}}</a>
                                    <span></span>
                                </div>-->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="swiper-next-prev swiper-next" @click="prev">
                    <i class="iconfont icon-shangyiye2"></i>
                </div>
                <div class="swiper-next-prev swiper-prev" @click="next">
                    <i class="iconfont icon-xiayiye"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { apiFigureBans } from '@/api/figure'
export default {
    data() {
        return {
            dataImage: [
            ],
            swiperOption: {
                slidesPerView: 5,
                spaceBetween: 10,
                speed: 1200,
                lazy: {
                    loadPrevNext: true
                },
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                loop:true
            }
        }
    },
    created() {
        this.apiFigureBans();
    },
    methods: {
        next() {
            this.$refs.bannerSwiper.swiper.slideNext()
        },
        prev() {
            this.$refs.bannerSwiper.swiper.slidePrev()
        },
        apiFigureBans() {
            apiFigureBans().then((res) => {
                this.dataImage = res.data;
            })
        }
    }
}
</script>
<style lang="less" scoped>
.space-swiper {
    height: 200px;
    margin-top: 20px;
    &-banner {
        position: relative;
        .item {
            height: 200px;
            .item-card-img {
                height: 200px;
                font-size: 0;
                a {
                    display: inline-block;
                    height: 100%;
                    img {
                        object-fit: cover;
                        width: 100%;
                        height: 100%;
                        // border-top-right-radius: 6px;
                        // border-top-left-radius: 6px;
                        border-radius: 6px;
                    }
                }
            }
            .item-card-title {
                height: 40px;
                background-color: #ffffff;
                font-size: 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-bottom-right-radius: 6px;
                border-bottom-left-radius: 6px;
                padding: 0 10px;
                box-sizing: border-box;
                a {
                    display: inline-block;
                    font-size: 14px;
                    color: #333;
                    max-width: 156px;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    display: inline-block;
                    vertical-align: middle;
                }
            }
        }
    }
}
</style>