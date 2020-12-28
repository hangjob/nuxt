<template>
    <div class="intera">
        <Header />
        <div class="wp clearfix">
            <div class="content">
                <div class="left">
                    <make />
                    <list />
                    <list />
                    <list />
                </div>
                <div class="right">
                    <user />
                    <youce/>
                    <widget/>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import make from '@/web/intera/make'
import list from '@/web/intera/list'
import user from '@/web/intera/user'
import youce from '@/web/intera/youce'
import widget from '@/web/intera/widget'
export default {
    components: {
        make,
        list,
        user,
        youce,
        widget
    }
}
</script>
<style lang="less" scoped>
.intera {
    .content {
        display: flex;
        .left {
            flex: 1;
        }
        .right {
            width: 300px;
            padding-left: 20px;
            box-sizing: border-box;
        }
    }
}
</style>