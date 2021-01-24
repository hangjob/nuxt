<template>
    <div class="detail">
        <div class="wp detail-box">
            <div class="left">
                <no-ssr>
                    <mavon-editor
                        class="detail-md itnavs-markdown"
                        :value="detail[keyName]"
                        :subfield="false"
                        :defaultOpen="'preview'"
                        :toolbarsFlag="false"
                        :editable="false"
                    />
                </no-ssr>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        detail: {
            type: Object,
            default: () => { }
        },
        keyName: {
            type: String,
            default: 'content'
        }
    },
    data() {
        return {

        }
    },
    created() {

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

    &-md {
        box-shadow: none !important;
    }
    &-box {
        .left {
            width: 100%;
            padding: 0 15px;
        }
    }
}
</style>