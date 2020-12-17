<template>
    <div class="intera">
        <Header />
        <div class="wp clearfix">
            <make/>
        </div>
        <Footer />
    </div>
</template>
<script>
import make from '@/web/intera/make'
export default {
    components: {
        make
    }
}
</script>
<style lang="less" scoped>
.intera {
}
</style>