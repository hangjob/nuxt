<template>
    <div class="article-banner">
        <div class="items" v-if="dataImage.length">
            <nuxt-link to="/figure"  class="item">
                <img :src="dataImage[0].img" alt />
            </nuxt-link>
            <nuxt-link to="/figure"  class="item">
                <img :src="dataImage[1].img" alt />
            </nuxt-link>
            <nuxt-link to="/figure" class="item item-long">
                <img :src="dataImage[2].img" alt />
            </nuxt-link>
        </div>
    </div>
</template>
<script>
import { apiFigureBans } from '@/api/figure'
export default {
    data() {
        return {
            dataImage: []
        }
    },
    created() {
        this.apiFigureBans();
    },
    methods: {
        apiFigureBans() {
            apiFigureBans().then((res) => {
                this.dataImage = res.data;
            })
        }
    }

}
</script>
<style lang="less" scoped>
.article-banner {
    margin-top: 20px;
    .items {
        font-size: 0;
        .item {
            width: 320px;
            height: 216px;
            border-radius: 4px;
            vertical-align: bottom;
            display: inline-block;
            margin-right: 30px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .item-long {
            width: 600px;
            margin-right: 0;
        }
    }
}
</style>