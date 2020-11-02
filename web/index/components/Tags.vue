<template>
    <div class="tags">
        <h4>
            <img src="@/assets/images/fire.png" />热门标签
        </h4>
        <div class="tags-items clearfix">
            <a v-for="(item,index) in items" :key="index" :style="{backgroundColor:colors[index+50].color}">视频</a>
        </div>
    </div>
</template>
<script>
import color from '@/assets/color/colour'
export default {
    data() {
        return {
            colors: color,
            items:50
        }
    }
}
</script>
<style lang="less" scoped>
.tags {
    margin-top: 20px;
    background-color: #fff;
    padding: 10px 10px;
    h4 {
        margin-bottom: 10px;
        font-size: 14px;
        display: flex;
        align-items: center;
        img {
            height: 20px;
            margin-right: 5px;
        }
    }
    &-items {
        a {
            color: #fff;
            float: left;
            margin: 0 7px 7px 0;
            font-size: 13px;
            padding: 2px 5px;
            border-radius: 3px;
            opacity: 0.75;
            background-color: rgb(255, 100, 100);
            cursor: pointer;
        }
    }
}
</style>