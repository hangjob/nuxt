<template>
    <div class="detail">
        <div class="wp">
            <no-ssr>
                <mavon-editor
                    class="detail-md itnavs-markdown"
                    :value="detail.content"
                    :subfield="false"
                    :defaultOpen="'preview'"
                    :toolbarsFlag="false"
                    :editable="false"
                />
            </no-ssr>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        detail: {
            type: Object,
            default: () => { }
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
<style>
.detail .markdown-body blockquote {
    border-left: 0.25em solid #ed328d;
}
.detail .v-show-content {
    background-color: #fff !important;
    padding: 0;
}
.detail .markdown-body img {
    border-radius: 6px;
}
</style>
<style lang="less">
.detail {
    background-color: #fff;
    padding: 20px 0;
    &-md {
        box-shadow: none !important;
    }
}
</style>