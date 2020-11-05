<template>
    <div class="search">
        <el-dialog
            title
            :visible.sync="dialogTableVisible"
            top="60px"
            width="1300px"
            :modal="true"
            custom-class="custom-search"
            :close-on-click-modal="false"
        >
            <div class="search-body">
                <h2>搜索</h2>
                <el-input
                    placeholder="输入你需要的站点类型或名称（点击热门关键字可以进行快捷搜索）"
                    v-model="ks"
                    class="input-with-select"
                >
                    <el-select v-model="select" slot="prepend" placeholder="请选择">
                        <el-option
                            :label="item.name"
                            :value="item.img"
                            v-for="(item,index) in options"
                            :key="index"
                        >
                            <img class="site-logo" :src="imgRequset(item.img)" alt />
                            <span class="site-name">{{item.name}}</span>
                        </el-option>
                    </el-select>
                    <el-button class="custom-search-btn" slot="append" icon="el-icon-search">搜索</el-button>
                </el-input>
                <div class="keywords">
                    <a>优设标题黑</a>
                    <a>优设标题黑</a>
                    <a>优设标题黑</a>
                    <a>优设标题黑</a>
                    <a>优设标题黑</a>
                    <a>优设标题黑</a>
                    <a>优设标题黑</a>
                    <a>优设标题黑</a>
                </div>
                <div class="manuscript">
                    <div class="manuscript-feft">
                        <img src="@/assets/images/2.png" alt />
                        <div class="manuscript-text">
                            相爱的人不该争吵，
                            <br />因为他们只有两人，
                            <br />与他们作对的是整个世界。
                            <br />—— 海明威
                        </div>
                    </div>
                    <div class="manuscript-right">
                        <img src="@/assets/images/3.png" alt />
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dialogTableVisible: true,
            ks: '',
            select: 'logo.png',
            options: [
                { name: '本站搜索', img: 'logo.png' },
                { name: '百度', img: 'baidu.png' },
                { name: '谷歌', img: 'google.png' },
                { name: '必应', img: 'bing.png' },
                { name: 'GitHub', img: 'github.png' },
                { name: '搜狗', img: 'sogou.png' },
                { name: '好搜', img: 'so.png' },
                { name: 'Doge', img: 'doge_ico.png' },
                { name: '淘宝', img: 'taobao.png' }
            ]
        }
    },
    computed: {
        imgRequset() {
            return function (img) {
                return require('~/assets/images/logo/' + img)
            }
        }
    }
}
</script>
<style lang="less">
.el-select .el-input {
    width: 130px;
}
.input-with-select .el-input-group__prepend {
    background-color: #fff;
}
.site-logo {
    width: 20px;
    height: 20px;
    margin: 7.5px;
    object-fit: cover;
}
.site-name {
}
.custom-search {
    border-radius: 6px;
}
.el-input-group__append {
    border-color: #ffd100 !important;
}
.custom-search-btn {
    text-align: center;
    height: 100%;
    width: 100px;
    color: #fff !important;
    background-color: #ffd100 !important;
    border-radius: 0 !important;
    cursor: pointer;
    border-color: #ffd100 !important;
}
</style>
<style lang="less" scoped>
.search {
    &-body {
        min-height: 300px;
        h2 {
            font-size: 32px;
            color: #333;
            margin-bottom: 20px;
            line-height: 1;
        }
        .keywords {
            margin-top: 20px;
            a {
                display: inline-block;
                white-space: nowrap;
                margin: 0 10px;
                color: #888;
                background-color: #fafafa;
                padding: 10px 15px;
                margin-right: 15px;
                margin-bottom: 15px;
                font-size: 14px;
                line-height: 14px;
                color: #202020;
                cursor: pointer;
            }
        }
        .manuscript {
            background-color: #fac782;
            padding: 20px 50px;
            color: #fff;
            font-size: 16px;
            line-height: 32px;
            display: flex;
            border-radius: 6px;
            margin-top: 20px;
            &-feft {
                flex: 1;
                img {
                    width: 200px;
                }
                .manuscript-text {
                    color: #fff;
                    margin-left: 30px;
                }
            }
            &-right {
                flex: 1;
                text-align: right;
                padding-right: 20px;
                img {
                    height: 240px;
                    width: auto;
                }
            }
        }
    }
}
</style>