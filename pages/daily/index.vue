<template>
    <div class="daily">
        <Header />
        <div class="wp clearfix">
            <div class="list">
                <List />
                <List />
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import List from '@/web/daily/list'
export default {
    components: {
        List
    }
}
</script>
<style lang="less" scoped>
.daily {
    .list {
        margin-top: 30px;
    }
}
</style>