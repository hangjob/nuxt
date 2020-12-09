<template>
    <div class="WechatBanner">
        <div v-swiper="swiperOption">
            <div class="swiper-wrapper">
                <div v-for="(item, index) in dataImage" :key="index" class="swiper-slide">
                    <img :src="item.imgUrl" />
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
                { imgUrl: 'https://w.wallhaven.cc/full/wq/wallhaven-wqorz7.jpg' },
                { imgUrl: 'https://w.wallhaven.cc/full/9m/wallhaven-9m56vd.jpg' },
                 { imgUrl: 'https://w.wallhaven.cc/full/wq/wallhaven-wqorz7.jpg' },
                { imgUrl: 'https://w.wallhaven.cc/full/9m/wallhaven-9m56vd.jpg' },
                 { imgUrl: 'https://w.wallhaven.cc/full/wq/wallhaven-wqorz7.jpg' },
                { imgUrl: 'https://w.wallhaven.cc/full/9m/wallhaven-9m56vd.jpg' },
            ],
            swiperOption: {
                lazy: true,
                spaceBetween:30,
                slidesPerView:4,
            }
        }
    }
}
</script>
<style lang="less" scoped>
.WechatBanner {
    height: 200px;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
    .swiper-container {
        height: 100%;
        width: 100%;
    }
    .swiper-slide {
        text-align: center;
        img {
            width: auto;
            height: auto;
            max-width: 100%;
            max-height: 100%;
            transform: translate(-50%, -50%);
            position: absolute;
            left: 50%;
            top: 50%;
            border-radius: 5px;
        }
    }
}
</style>