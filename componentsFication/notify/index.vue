<template>
    <transition name="fade" @after-leave="afterLeave" @after-enter="afterEnter">
        <div class="notification" :style="style" v-show="visible">
            <span class="content" mouseenter="clearTimer" mouseout="createTime">{{content}}</span>
            <a class="btn" @click="handleClick">{{btn}}</a>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Notification',
    props: {
        content: {
            type: String,
            required: true
        },
        btn: {
            type: String,
            default: "关闭"
        }
    },
    data() {
        return {
            offset: {
                top: 20,
                right: 20
            },
            autoClose: 5000,
            visible: false
        }
    },
    mounted() {
        this.createTimer()
    },
    computed: {
        style() {
            return {
                position: 'fixed',
                right: `${this.offset.right}px`,
                top: `${this.offset.top}px`
            }
        }
    },
    methods: {
        handleClick(e) {
            e.preventDefault();
            this.$emit('close')
        },
        afterLeave() {
            this.$emit('closed')
        },
        afterEnter() {
            this.height = this.$el.offsetHeight
        },
        createTimer() {
            if (this.autoClose) {
                this.timer = setTimeout(() => {
                    this.visible = false
                }, this.autoClose)
            }
        },
        clearTimer() {
            if (this.timer) {
                clearTimeout(this.timer)
            }
        }
    },
    destroyed() {
        this.clearTimer()
    }
}
</script>

<style lang="less" scoped>
.notification {
    display: flex;
    background: #303030;
    color: rgba(255, 255, 255, 1);
    align-items: center;
    padding: 20px;
    position: fixed;
    min-width: 280px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2);
    flex-wrap: wrap;
    transition: all 0.3s;
    border-radius: 10px;
    .content {
        padding: 0;
    }
    .btn {
        color: #ff4081;
        padding-left: 24px;
        margin-left: auto;
        cursor: pointer;
    }
}
</style>