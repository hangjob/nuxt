import Vue from 'vue'

const tool = {};

tool.navLink = (item) => {
    if (item.pic) {
        return `/thread/${item.id}`
    } else {
        return `/navdet/${item.id}`
    }
}

// 挂载到全局Vue实例
Vue.use({
    install(Vue) {
        Vue.prototype.$tool = {...tool };
    }
});