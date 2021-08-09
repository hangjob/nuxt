<template>
    <div class="index-banner">
        <div v-swiper="swiperOption" ref="bannerSwiper">
            <div class="swiper-wrapper">
                <div v-for="(item, index) in specialData[0].spitems" :key="index" class="swiper-slide">
                    <a class="item">
                        <img :src="item.pic" alt />
                        <div class="des">
                            <h6>{{item.title}}</h6>
                        </div>
                    </a>
                </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="cut prev">
                <i class="iconfont icon-shangyiye2"></i>
            </div>
            <div class="cut next">
                <i class="iconfont icon-xiayiye"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        specialData: {
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
                // autoplay: {
                //     delay: 2500,
                //     disableOnInteraction: false,
                // },
                loop: false,
                pagination: {
                    el: ".swiper-pagination",
                },
                navigation: {
                    //下一张
                    nextEl: '.next',//下一张标签类名可以自定义
                    //上一张
                    prevEl: '.prev'//上一张标签类名可以自定义
                }
            },
            dataImage: [
                {
                    img: require('@/assets/chahua/true.png')
                },
                {
                    img: require('@/assets/chahua/1.jpg')
                }
            ]
        }
    }
}
</script>
<style lang="less">
.index-banner {
    .swiper-pagination {
        .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            opacity: 0.7;
            border-radius: 50%;
            background: #ddd;
            transition: all 0.2s;
        }
        .swiper-pagination-bullet-active {
            width: 26px;
            height: 10px;
            opacity: 0.7;
            border-radius: 5px;
            background-color: #0cb4cb;
        }
    }
    .cut {
        position: absolute;
        z-index: 100;
        width: 45px;
        height: 45px;
        border-radius: 50%;
        background-color: rgba(7, 62, 77, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translate(0%, -50%);
        top: 50%;
        cursor: pointer;
        i {
            color: #fff;
            font-size: 18px;
            transition: all 0.3s;
        }
        &:hover {
            i {
                color: chartreuse;
            }
        }
    }
    .prev {
        left: 30px;
    }
    .next {
        right: 30px;
    }
}
</style>
<style lang="less" scoped>
.index-banner {
    margin-bottom: 30px;
    width: 800px;
    width: 100%;
    height: 300px;
    overflow: hidden;
    border-radius: 5px;
    .item {
        width: 100%;
        position: relative;
        background-color: #fff;
        display: inline-block;
        height: 300px;
        overflow: hidden;
        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
        }
        .des {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            h6 {
                font-size: 20px;
                color: #fff;
            }
        }
    }
}
</style>