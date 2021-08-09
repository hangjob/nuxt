<template>
    <div class="special">
        <div
            :class="['item cursor']"
            v-for="item,index in specialData"
            :key="index"
            @click="handClick(item)"
        >
            <div class="img" :style="{'background-image':`url(${item.icon})`}"></div>
            <div class="content">
                <h3>{{item.name}}</h3>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        specialData: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {

        }
    },
    created() {

    },
    methods: {
        handClick(item) {
            if (!item.id) {
                this.$alert('嗨，同学<br/>我会在后台搜索最多的<span style="color:#67c23a">[关键词]</span>中制定相关主题<br/>或者你@<a href="https://www.vipbic.com/about.html" target="_blank">我</a>', '更多专题', {
                    confirmButtonText: '我知道了',
                    dangerouslyUseHTMLString: true,
                    type: 'success',
                    callback: action => {

                    }
                });
                return false;
            } else {
                this.$router.push({ path: '/ikon/' + item.id })
            }
        }
    }
}
</script>
<style lang="less" scoped>
.special {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
        width: 24%;
        height: 80px;
        display: flex;
        align-items: center;
        color: #fff;
        position: relative;
        overflow: hidden;
        border-radius: 5px;
        margin-bottom: 10px;
        &.cursor {
            cursor: pointer;
        }
        // https://www.zhangxinxu.com/wordpress/2019/08/css-flex-last-align/
        /* 如果最后一行是3个元素 */
        &:last-child:nth-child(4n - 1) {
            margin-right: calc(24% + 4% / 3);
        }
        /* 如果最后一行是2个元素 */
        &:last-child:nth-child(4n - 2) {
            margin-right: calc(48% + 8% / 3);
        }
        .img {
            display: block;
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 50%;
            position: absolute;
            left: 0;
            top: 0;
            overflow: hidden;
            opacity: 1;
            transition: opacity 1s ease;
        }
        .content {
            position: relative;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
            z-index: 10;
            vertical-align: middle;
            transition: all 0.3s;
            display: flex;
            justify-content: center;
            align-items: center;
            h3 {
                font-size: 20px;
                font-weight: bold;
            }
        }
    }
}
</style>