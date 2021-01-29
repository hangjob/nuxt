<template>
    <div class="tags">
        <h4>
            <img src="@/assets/images/fire.png" />热门标签
        </h4>
        <div class="tags-items clearfix">
            <nuxt-link
                :to="`/search?ks=${item}`"
                v-for="(item,index) in items"
                :key="index"
                :style="{backgroundColor:colors[index+10].color}"
            >{{item}}</nuxt-link>
        </div>
    </div>
</template>
<script>
import color from '@/assets/color/colour'
export default {
    data() {
        return {
            colors: color,
            items: ['前端', '文档', 'Vue', 'React', '在线工具', 'PPT', '图床', 'Node.js', 'Java', 'JavaScript', 'PHP', 'Redis', 'Nginx', 'ThinkPHP',
                '面试', '后台管理', '公众号', '桌面工具', '设计工具', '截图', 'Linux', 'Windows', '字体下载', '免费素材', 'App', '混合开发', 'Icon', '产品经理', '实用工具', '建站', 'UI框架']
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
            margin: 0 10px 10px 0;
            font-size: 13px;
            padding: 3px 8px;
            border-radius: 3px;
            opacity: 0.75;
            background-color: rgb(255, 100, 100);
            cursor: pointer;
        }
    }
}
</style>