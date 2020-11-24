<template>
    <div class="space-swiper">
        <div class="wp">
            <div class="space-swiper-banner itnavs-banner">
                <div v-swiper="swiperOption" ref="bannerSwiper">
                    <div class="swiper-wrapper">
                        <div v-for="(item, index) in dataImage" :key="index" class="swiper-slide">
                            <div class="item">
                                <div class="item-card-img">
                                    <a href>
                                        <img :src="item.imgUrl" />
                                    </a>
                                </div>
                                <div class="item-card-title">
                                    <a href>天气冷了，老妈喊你穿秋裤了吗？</a>
                                    <span></span>
                                </div>
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
export default {
    data() {
        return {
            dataImage: [
                { imgUrl: 'https://images.wallpaperscraft.com/image/girl_shell_hare_167320_1600x1200.jpg' },
                { imgUrl: 'https://images.wallpaperscraft.com/image/girl_kimono_anime_182197_1600x1200.jpg' },
                { imgUrl: 'https://images.wallpaperscraft.com/image/girl_anime_toy_183017_1600x1200.jpg' },
                { imgUrl: 'https://w.wallhaven.cc/full/ym/wallhaven-ymzz6l.jpg' },
                { imgUrl: 'https://w.wallhaven.cc/full/9m/wallhaven-9mxom8.jpg' },
                { imgUrl: 'https://w.wallhaven.cc/full/m9/wallhaven-m9q3q8.jpg' },
                { imgUrl: 'https://w.wallhaven.cc/full/8o/wallhaven-8o77d1.jpg' }
            ],
            swiperOption: {
                slidesPerView: 5,
                spaceBetween: 10,
                speed: 1200,
                lazy: {
                    loadPrevNext: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            }
        }
    },
    methods: {
        prev() {

        },
        next() {

        }
    }
}
</script>
<style lang="less" scoped>
.space-swiper {
    height: 240px;
    margin-top: 20px;
    &-banner {
        position: relative;
        .item {
            height: 240px;
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
                        border-top-right-radius: 6px;
                        border-top-left-radius: 6px;
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