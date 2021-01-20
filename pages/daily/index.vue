<template>
    <div class="daily">
        <Header />
        <div class="wp clearfix">
            <div class="lists">
                <List :item="item" v-for="item in items" :key="item.id"/>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import List from '@/web/daily/list'
import { apiNactagDaily } from '@/api/index'
export default {
    components: {
        List
    },
    async asyncData({ $axios, app, store, params }) {
        const res = await apiNactagDaily();
        console.log(res)
        return {
            items: res.data,
        }
    },
}
</script>
<style lang="less" scoped>
.daily {
    .lists {
        margin-top: 30px;
    }
}
</style>