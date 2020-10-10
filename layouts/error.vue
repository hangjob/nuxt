<template>
    <div class="error-page">
        <div class="error">
            <div class="title">{{statusCode}} - {{ message }}</div>
            <nuxt-link class="error-link" to="/">回到首页</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            default: null
        }
    },
    computed: {
        statusCode() {
            return (this.error && this.error.statusCode) || 500
        },
        message() {
            return this.error.message || 'Error'
        }
    },
    head() {
        return {
            title: `${this.statusCode === 404 ? '找不到页面' : '找不到页面'} - 全栈导航`,
            meta: [
                {
                    name: 'viewport',
                    content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
                }
            ]
        }
    }
}
</script>