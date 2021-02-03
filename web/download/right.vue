<template>
    <div class="right">
        <RightTop />
        <rightList/>
    </div>
</template>
<script>
import RightTop from '@/web/download/rightTop'
import rightList from '@/web/download/rightList'
export default {
    components: {
        RightTop,
        rightList
    }
}
</script>
<style lang="less" scoped>
.right {
    flex: 1;
    margin-left: 30px;
}
</style>