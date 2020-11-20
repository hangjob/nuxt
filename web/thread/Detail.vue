<template>
    <div class="detail">
        <div class="wp">
            <div v-html="content"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        content: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            markdownOption: {
                editable: false
            },
            handbook: '### 测试'
        }
    }
}
</script>
<style lang="less" scoped>
.detail {
    background-color: #fff;
    &-md {
        box-shadow: none !important;
    }
}
</style>