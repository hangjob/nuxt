<template>
    <div class="pick-specials">
        <div class="items clearfix">
            <PickSpecial class="items-item"></PickSpecial>
            <PickSpecial class="items-item"></PickSpecial>
            <PickSpecial class="items-item"></PickSpecial>
            <PickSpecial class="items-item"></PickSpecial>
            <PickSpecial class="items-item"></PickSpecial>
            <PickSpecial class="items-item"></PickSpecial>
        </div>
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
</template>
<script>
import PickSpecial from '@/web/pick/PickSpecial'
export default {
    components: {
        PickSpecial
    }
}
</script>
<style lang="less" scoped>
.pick-specials {
    margin-top: 30px;
    .items {
        margin-right: -20px;
        &-item {
            float: left;
            margin-right: 20px;
            margin-bottom: 30px;
        }
    }
}
</style>