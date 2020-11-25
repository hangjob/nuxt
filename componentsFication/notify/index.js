import Vue from 'vue'
import Notification from './index.vue'

const NotificationConstructor = Vue.extend(Notification)

const instances = []

let seed = 1

const removeInstance = instance => {
    if (!instance) return
    const len = instances.length
    const index = instances.findIndex(inst => instance.id == inst.id)
    instances.splice(index, 1)
    if (len < 1) return
    const removeHeight = instance.height
    for (var i = index; i < len - 1; i++) {
        instances[i].offset.top = parseInt(instances[i].offset.top) - removeHeight - 16;
    }
}

const notify = options => {
    if (Vue.prototype.$isServer) {
        return
    }
    const { autoClose, ...rest } = options
    const instance = new NotificationConstructor({
        propsData: {
            ...rest
        },
        data() {
            return {
                autoClose: autoClose === undefined ? 3000 + seed * 100 : autoClose
            }
        }
    })
    const id = `notification_${seed++}`
    instance.id = id

    instance.$mount()
    document.body.appendChild(instance.$el)
    instance.visible = true

    let top = 0

    instances.forEach(item => {
        top += item.$el.offsetHeight + 16
    })
    top += 16
    instance.offset.top = top
    instances.push(instance)
        // 监听事件，关闭
    instance.$on('closed', () => {
        removeInstance(instance)
        document.body.removeChild(instance.$el)
        instance.$destroy()
    })
    instance.$on('close', () => {
        instance.visible = false
    })
}


Vue.use({
    install(Vue) {
        Vue.component(Notification.name, Notification)
        Vue.prototype.$$notify = notify
    }
});