<template>
    <div class="min-banner">
        <div v-swiper="swiperOption" ref="bannerSwiper">
            <div class="swiper-wrapper">
                <div v-for="(item, index) in dataImage" :key="index" class="swiper-slide">
                    <div class="item">
                        <a href="/figure" target="_blank">
                            <img :src="item.img" :alt="item.title" />
                        </a>
                        <div class="des">{{item.title}}</div>
                        <div class="widget2 iconfont"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
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
                loop: false
            },
            dataImage: [
                { img: 'https://www.tuniaokj.com/uploads/20191008/e1ad65ee40735fd058928f2b0a641f0a.jpg', title: 'sddad' }
            ]
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
            font-size: 17px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }
    }
}
</style>