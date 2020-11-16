<template>
    <div class="mavon-editor">
        <Header />
        <div class="wp mavon-editor-container clearfix">
            <no-ssr>
                <MavonAdd />
            </no-ssr>
        </div>
        <Footer />
    </div>
</template>
<script>
import MavonAdd from '@/web/write/MavonAdd'
export default {
    components: {
        MavonAdd
    }
};
</script>

<style lang="less" scoped>
.mavon-editor {
    width: 100%;
    height: 100%;
    &-container {
        background-color: #fff;
        box-sizing: border-box;
        padding: 20px 0;
    }
}
</style>