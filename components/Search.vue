<template>
    <div class="search">
        <el-dialog title="收货地址" :visible.sync="dialogTableVisible" top="60px" width="1300px" :modal="false">
            
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dialogTableVisible: true
        }
    }
}
</script>
<style lang="less" scoped>
</style>