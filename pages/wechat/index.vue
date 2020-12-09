<template>
    <div class="wechat">
        <Header />
        <div class="wp clearfix">
            <WechatBanner/>
            <div class="list">
                <WechatItem class="list-item" :detail="item" v-for="(item,index) in listData" :key="index"/>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import WechatItem from '@/web/wechat/WechatItem'
import WechatBanner from '@/web/wechat/WechatBanner'
const handType = (name) => {
    const arr = [{ type: 'HOT', name: '热门' },
    { type: 'FUNNY', name: '搞笑' },
    { type: 'HEALTH', name: '养生' },
    { type: 'SEX', name: '两性' },
    { type: 'GOSSIP', name: '八卦' },
    { type: 'TECH', name: '科技' },
    { type: 'FINANCE', name: '财经' },
    { type: 'CAR', name: '汽车' },
    { type: 'LIFE', name: '生活' },
    { type: 'FASHION', name: '时尚' },
    { type: 'BABY', name: '育儿' },
    { type: 'TRAVEL', name: '旅游' },
    { type: 'WORK', name: '职场' },
    { type: 'FOOD', name: '美食' },
    { type: 'HISTORY', name: '历史' },
    { type: 'EDUCATION', name: '教育' },
    { type: 'HOROSCOPE', name: '星座' },
    { type: 'SPORTS', name: '体育' },
    { type: 'MILITARY', name: '军事' },
    { type: 'GAME', name: '游戏' },
    { type: 'CAT', name: '萌宠' },
    ]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type === name) {
            return arr[i];
        }
    }
}

const handProcessing = (obj) => {
    let arr = [];
    if (obj) {
        for (let i in obj) {
            arr.push({ lists: obj[i], type: handType(i) });
        }
    }
    return arr;
}
export default {
    components: {
        WechatItem,
        WechatBanner
    },
    async asyncData({ $axios, app, store }) {
        return Promise.all([
            $axios.post(app.$api.loginUserinfo),
            $axios.post(app.$api.wxcontentGroups)
        ]).then((res) => {
            const userInfo = res[0];
            const listData = res[1];
            store.commit('setUserInfo', userInfo.data)
            return {
                userInfo: userInfo.data,
                listData: handProcessing(listData.data)
            }
        }).catch((err) => {
            console.log(err)
        })
    },
    mounted() {
        console.log(this.listData);
    }
}
</script>
<style lang="less" scoped>
.wechat {
    .list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &-item {
            width: 49.5%;
        }
    }
}
</style>