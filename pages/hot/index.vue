<template>
    <div class="hot">
        <Header />
        <div class="wp clearfix">
            <div class="container">
                <software />
                <navlist/>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import software from '@/web/hot/software'
import navlist from '@/web/hot/navlist'
export default {
    components: {
        software,
        navlist
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.hot {
    .container {
        display: flex;
        flex-direction: column;
    }
}
</style>