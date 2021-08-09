<template>
    <div class="ikon">
        <Header />
        <div class="wp clearfix">
            <listPage :items="listData" />
        </div>
        <Footer />
    </div>
</template>
<script>
import listPage from '@/web/ikon/listPage'
import { apiSpecialListids } from '@/api/special'
export default {
    components: {
        listPage
    },
    async asyncData({ store, params }) {
        const res = await apiSpecialListids({ id: params.id });
        return {
            listData: res.data,
        }
    },
}
</script>
<style lang="less" scoped>
</style>