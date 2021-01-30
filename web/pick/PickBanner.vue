<template>
    <div class="wp pick">
        <div class="pick-banner itnavs-banner">
            <div v-swiper="swiperOption" ref="bannerSwiper">
                <div class="swiper-wrapper">
                    <div v-for="(item, index) in dataImage" :key="index" class="swiper-slide">
                        <img :src="item.img" />
                    </div>
                </div>
                <div slot="pagination" class="swiper-pagination"></div>
            </div>
            <div class="swiper-next-prev swiper-next" @click="prev">
                <i class="iconfont icon-shangyiye2"></i>
            </div>
            <div class="swiper-next-prev swiper-prev" @click="next">
                <i class="iconfont icon-xiayiye"></i>
            </div>
        </div>
        <div class="pick-sub" v-if="dataImage.length">
            <a class="item">
                <img :src="dataImage[dataImage.length-2].img" alt />
            </a>
            <a class="item">
                <img :src="dataImage[dataImage.length-1].img" alt />
            </a>
        </div>
    </div>
</template>
<script>
import { apiFigureBans } from '@/api/figure'
export default {
    data() {
        return {
            dataImage: [],
            swiperOption: {
                speed: 1200,
                lazy: {
                    loadPrevNext: true
                },
                spaceBetween: 30,
                pagination: {
                    el: ".swiper-pagination"
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false,
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
::v-deep .pick-banner .swiper-pagination-bullet-active {
    background-color: #fff;
}
.pick {
    display: flex;
    img {
        width: 100%;
        object-fit: cover;
        height: 100%;
    }
}
.pick-sub {
    width: 300px;
    .item {
        height: 195px;
        width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 6px;
        overflow: hidden;
        &:last-child {
            margin-bottom: 0;
        }
    }
}
.pick-banner {
    height: 400px;
    position: relative;
    width: 980px;
    margin-right: 20px;
    border-radius: 6px;
    overflow: hidden;
    .swiper-container {
        height: 100%;
        width: 100%;
    }
}
</style>