<template>
    <div class="pick">
        <Header />
        <PickBanner></PickBanner>
        <div class="wp clearfix">
           <PickSpecials></PickSpecials>
        </div>
        <Footer />
    </div>
</template>
<script>
import PickBanner from '@/web/pick/PickBanner'
import PickSpecials from '@/web/pick/PickSpecials'
export default {
    components: {
        PickBanner,
        PickSpecials
    }
}
</script>
<style lang="less" scoped>
.pick{
    
}
</style>