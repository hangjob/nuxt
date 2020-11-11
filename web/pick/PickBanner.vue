<template>
    <div class="wp pick">
        <div class="pick-banner">
            <div v-swiper="swiperOption" ref="bannerSwiper">
                <div class="swiper-wrapper">
                    <div v-for="(item, index) in dataImage" :key="index" class="swiper-slide">
                        <img :src="item.imgUrl" />
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
        <div class="pick-sub">
            <a class="item"><img :src="dataImage[0].imgUrl" alt=""></a>
            <a class="item"><img :src="dataImage[1].imgUrl" alt=""></a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dataImage: [
                { imgUrl: 'https://images.wallpaperscraft.com/image/girl_shell_hare_167320_1600x1200.jpg' },
                { imgUrl: 'https://images.wallpaperscraft.com/image/girl_kimono_anime_182197_1600x1200.jpg' },
                { imgUrl: 'https://images.wallpaperscraft.com/image/girl_anime_toy_183017_1600x1200.jpg' }
            ],
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
                }
            }
        }
    },
    methods: {
        next() {
            this.$refs.bannerSwiper.swiper.slideNext()
        },
        prev() {
            this.$refs.bannerSwiper.swiper.slidePrev()
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
    .item{
        height: 195px;
        width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 6px;
        overflow: hidden;
        &:last-child{
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
    &:hover {
        .swiper-next-prev {
            background-color: rgba(0, 0, 0, 0.3);
        }
    }
    .swiper-container {
        height: 100%;
        width: 100%;
    }
    .swiper-next-prev {
        position: absolute;
        top: 50%;
        transform: translate(0%, -50%);
        width: 46px;
        height: 46px;
        text-align: center;
        color: #fff;
        z-index: 2;
        padding: 12px;
        border-radius: 50%;
        cursor: pointer;
        box-sizing: border-box;
        transition: all 0.3s;
    }
    .swiper-next {
        left: 10px;
    }
    .swiper-prev {
        right: 10px;
        i {
            transform: rotate(90deg);
            -webkit-transform: rotate(90deg);
        }
    }
}
</style>