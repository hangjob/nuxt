<template>
    <div class="navdet">
        <Header />
        <div class="wp clearfix">
            <paged />
        </div>
        <Footer />
    </div>
</template>
<script>
import paged from '@/web/navdet/paged'
export default {
    components: {
        paged
    },
    async asyncData({ $axios, app, store, params }) {
        return Promise.all([
            $axios.post(app.$api.loginUserinfo),
        ]).then((res) => {
            const userInfo = res[0];
            store.commit('setUserInfo', userInfo.data)
            return {
                userInfo: userInfo.data,
            }
        }).catch((err) => {
            console.log(err)
        })
    },
}
</script>
<style lang="less" scoped>
.navdet{
    
}
</style>