<template>
    <div class="header">
        <div class="header_wap wp">
            <nuxt-link class="logo" to="/">
                <img src="@/assets/images/logo.png" alt="全栈导航" />
            </nuxt-link>
            <div class="menus">
                <ul>
                    <li v-for="item in items" :key="item.id">
                        <template v-if="item.id === 7 && userInfo.username">
                            <a>{{userInfo.username}}</a>
                        </template>
                        <template v-else>
                            <a
                                v-if="item.url==='javascript:;' || item.tag === 'a'"
                                :href="item.url"
                                @click.prevent="handClickItem(item)"
                            >{{item.title}}</a>
                            <nuxt-link v-else :target="item.target" :to="item.url">{{item.title}}</nuxt-link>
                        </template>
                    </li>
                </ul>
            </div>
        </div>
        <Search ref="search" />
        <Login ref="login" @registerOpen="registerOpen" />
        <Registe ref="registe" @loginOpen="loginOpen" />
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                { title: '首页', id: 1, url: '/', target: '_self' },
                { title: '社区', id: 3, url: 'javascript:;', target: '_self' },
                { title: '搜索', id: 9, url: 'javascript:;', target: '_self' },
                { title: '文章', id: 6, url: '/article', target: '_self' },
                { title: '精选', id: 10, url: '/pick', target: '_self' },
                { title: '主题', id: 2, url: 'https://www.vipbic.com/rank.html', tag: 'a', target: '_blank' },
                { title: '开源', id: 12, url: 'https://github.com/hangjob', tag: 'a', target: '_blank' },
                { title: '联系我们', id: 5, url: '/join', target: '_self' },
                { title: '登录', id: 7, url: 'javascript:;', target: '_self' }]
        }
    },
    computed: {
        userInfo() {
            return this.$store.state.userInfo
        }
    },
    methods: {
        handClickItem(item) {
            if (item.title === '搜索') {
                if (this.$route.name != 'search') {
                    this.$refs.search.openDialogTableVisible();
                } else {
                    this.$notify.success({
                        title: '提示',
                        message: '小可爱，你当前处于在搜索页面中，输入关键词搜索',
                        showClose: false
                    });
                }
            }
            if (item.title === '社区') {
                this.$notify.success({
                    title: '提示',
                    message: '小可爱，社区正在加紧开发中...',
                    showClose: false
                });
            }
            if (item.title === '登录') {
                this.$refs.login.visible = true;
            }
            if (item.title === '主题') {
                window.open(item.url)
            }
            if (item.title === '开源') {
                window.open(item.url)
            }
        },
        registerOpen() {
            this.$refs.login.visible = false;
            this.$refs.registe.visible = true;
        },
        loginOpen() {
            this.$refs.login.visible = true;
            this.$refs.registe.visible = false;
        }
    },
    created() {

    }
}
</script>
<style lang="less" scoped>
.header {
    height: 60px;
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(197, 197, 197, 0.1);
    margin-bottom: 10px;
    min-width: 1300px;
    &_wap {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .logo {
        display: inline-block;
        img {
            height: 60px;
        }
    }
    .menus {
        ul {
            li {
                display: inline-block;
                a {
                    padding: 0 20px;
                    font-size: 13px;
                    color: #8590a6;
                    line-height: 60px;
                    height: 60px;
                    display: inline-block;
                }
                &:last-child {
                    a {
                        padding-right: 0;
                    }
                }
            }
        }
    }
}
</style>