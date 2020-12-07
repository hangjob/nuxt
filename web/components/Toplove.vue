<template>
    <div class="wp toplove">
        <ul>
            <li v-for="(item,index) in items" :key="index">
                <a :href="item.url" target="_blank">
                    <i :class="['iconfont',item.icon]" :style="{color:item.color}"></i>
                    <span>{{item.value}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                { value: '每日推荐', icon: 'icon-rili1', color: '#666', url: '/category' },
                { value: '效率工具', icon: 'icon-caozuojiemiantubiao---_gongju', color: '#f9be00', url: '/category/1' },
                { value: 'Web前端', icon: 'icon-kaifaguanli', color: '#6869dc', url: '/category/8' },
                { value: '全栈主题', icon: 'icon-tansuoxuanzhong', color: '#ffc107', url: '/category' },
                { value: '精选文章', icon: 'icon-wenzhangguanli', color: '#cddc39', url: '/article' },
                { value: 'UI设计', icon: 'icon-shejishi2', color: '#e91e63', url: '/category/1' },
                { value: '学习社区', icon: 'icon-xuexizhongxin', color: '#03a9f4', url: '/category/10' },
                { value: '后端开发', icon: 'icon-_qianduankaifa', color: '#2196f3', url: '/category/9' },
                { value: 'Top热榜', icon: 'icon-redu', color: '#f56c6c', url: '/category' },
                { value: '产品经理', icon: 'icon-chanpinxiangqingsheji', color: '#67c23a', url: '/category/3' },
                { value: '共享会员', icon: 'icon-changyonglogo45', color: '#66b1ff', url: '/category' },
                { value: '公众号', icon: 'icon-weixin', color: '#67c23a', url: '/category' },
            ]
        }
    }
}
</script>
<style lang="less" scoped>
.toplove {
    border-radius: 6px;
    border: 1px solid #f9f7f7;
    padding: 10px 30px;
    margin-top: 20px;
    background-color: #fff;
    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        li {
            a {
                display: flex;
                min-width: 80px;
                margin: 15px 10px 20px;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                i {
                    font-size: 28px;
                    color: #745adc;
                    transition: all 0.3s;
                }
                span {
                    margin-top: 2px;
                    transition: 0.2s all ease-out;
                    color: #666;
                    margin-top: -4px;
                }
            }
            &:hover {
                a {
                    i {
                        margin-top: -4px;
                        filter: drop-shadow(
                            0 6px 6px 0 rgba(100, 100, 100, 0.2)
                        );
                        filter: brightness(120%);
                    }
                }
            }
        }
    }
}
</style>