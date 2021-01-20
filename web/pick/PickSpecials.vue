<template>
    <div class="pick-specials">
        <div class="items clearfix">
            <PickSpecial
                class="items-item"
                :index="index"
                :detail="item"
                v-for="(item,index) in listData.data"
                :key="item.id"
            ></PickSpecial>
        </div>
        <el-pagination
            @current-change="currentChange"
            background
            layout="prev, pager, next"
            :total="listData.total"
            :page-size="12"
        ></el-pagination>
    </div>
</template>
<script>
import PickSpecial from '@/web/pick/PickSpecial'
export default {
    props: {
        listData: {
            type: Object,
            default: () => []
        }
    },
    components: {
        PickSpecial
    },
    methods: {
        currentChange(page) {
            this.$emit('apiNactagCategory', { page })
        }
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