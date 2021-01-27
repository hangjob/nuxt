<template>
    <div class="animatepln">
        <h3>动画</h3>
        <div class="animatepln-item">
            <animationEmotion />
            <animationHouse />
            <animationPinwheel />
            <animationBreathing/>
            <animationWork/>
        </div>
    </div>
</template>
<script>
import animationEmotion from '@/animation/emotion/index.vue'
import animationHouse from '@/animation/house/index.vue'
import animationPinwheel from '@/animation/pinwheel/index.vue'
import animationBreathing from '@/animation/breathing/index.vue'
import animationWork from '@/animation/work/index.vue'
export default {
    components: {
        animationEmotion,
        animationHouse,
        animationPinwheel,
        animationBreathing,
        animationWork
    }
}
</script>
<style lang="less" scoped>
.animatepln {
    display: flex;
    flex-direction: column;
    padding: 20px 10px;
    margin-bottom: 50px;
    background-color: #fff;
    border-radius: 5px;
    h3 {
        position: relative;
        padding-bottom: 15px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        line-height: 1;
        font-size: 18px;
        color: #545454;
    }
    &-item {
        display: flex;
        justify-content: space-between;
    }
}
</style>