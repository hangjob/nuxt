<template>
    <div class="pick">
        <Header />
        <PickBanner></PickBanner>
        <div class="wp clearfix">
            <PickSpecials @apiNactagCategory="apiNactagCategory" :listData="listData"></PickSpecials>
        </div>
        <Footer />
    </div>
</template>
<script>
import PickBanner from '@/web/pick/PickBanner'
import PickSpecials from '@/web/pick/PickSpecials'
import { apiNactagCategory } from '@/api/index'
export default {
    components: {
        PickBanner,
        PickSpecials
    },
    mounted() {
        setTimeout(() => {
            console.log(this.listData)
        }, 1000)
    },
    async asyncData() {
        const res = await apiNactagCategory()

        return {
            listData: res.data
        }
    },
    methods: {
        async apiNactagCategory({ page }) {
            const res = await apiNactagCategory({ page })
            this.listData = res.data
        }
    }
}
</script>
<style lang="less" scoped>
.pick {
}
</style>