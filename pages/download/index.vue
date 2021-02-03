<template>
    <div class="download">
        <Header />
        <div class="wp clearfix">
            <div class="container">
                <Left />
                <Right />
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Left from '@/web/download/left'
import Right from '@/web/download/right'
export default {
    components: {
        Left, Right
    },
    data() {
        return {

        }
    }
}
</script>
<style lang="less" scoped>
.download {
    .container {
        display: flex;
    }
}
</style>