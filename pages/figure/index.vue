<template>
    <div class="figure-detail">
        <Header />
        <div class="wp clearfix">
            <div class="items images" v-viewer="{movable: false}">
                <div class="item" v-for="(item,index) in items" :key="index">
                    <a @click="show" href="javascript:;">
                        <img :src="item.img" :key="item.img" />
                    </a>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import { apiFigureItems } from '@/api/figure'
export default {
    data() {
        return {
        }
    },
    async asyncData() {
        const data = await apiFigureItems();
        return {
            items: data.data.data
        }
    },
    methods: {
        show() {
            const viewer = this.$el.querySelector('.images').$viewer
            viewer.show()
        }
    }
}
</script>
<style lang="less" scoped>
.figure-detail {
    .items {
        display: flex;
        flex-wrap: wrap;
        .item {
            width: 20%;
            padding: 10px 5px;
            box-sizing: border-box;
            max-height: 380px;
            min-height: 250px;
            a {
                display: block;
                height: 100%;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 5px;
                }
            }
        }
    }
}
</style>