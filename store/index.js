// state为一个函数, 注意箭头函数写法
const state = () => ({
    counter: 6
})

// mutations为一个对象
const mutations = {
    increment(state) {
        state.counter++
    },
    decrement(state) {
        state.counter--
    }
}
const actions = {

}
const getters = {

}
export default {
    namespace: true, // 命名空间
    state,
    mutations,
    actions,
    getters
}