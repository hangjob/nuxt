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
                <el-autocomplete
                    placeholder="输入你需要的站点类型或名称（点击热门关键字可以进行快捷搜索）"
                    v-model="ks"
                    class="input-with-select"
                    :fetch-suggestions="querySearch"
                    @select="handleSelect"
                >
                    <el-select v-model="select" slot="prepend" placeholder="请选择" @change="change">
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
                    <el-button
                        @click="handleSearch"
                        class="custom-search-btn"
                        slot="append"
                        icon="el-icon-search"
                    >搜索</el-button>
                </el-autocomplete>
                <div class="keywords">
                    <template v-for="(item,index) in keywords">
                        <nuxt-link
                            :to="`/search?ks=${item}`"
                            :key="index"
                            :style="{backgroundColor:colour[index].color}"
                        >#{{item}}</nuxt-link>
                    </template>
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
                        <img src="https://w.wallhaven.cc/full/8o/wallhaven-8o7oz2.jpg" alt />
                    </div>
                </div>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import { baidu, sougou, haosou } from '@/api/search'
import colour from '@/color/colour'
let findKey = (key, str) => {
    return function objFn(obj, objIndex, objs) {
        return obj[key] === str;
    }
}
export default {
    data() {
        return {
            ks: '',
            select: 'logo.png',
            options: [
                { name: '本站搜索', img: 'logo.png' },
                { name: '百度', img: 'baidu.png', url: 'https://www.baidu.com/s?wd=' },
                { name: '搜狗', img: 'sogou.png', url: 'https://www.sogou.com/web?query=' },
                { name: '好搜', img: 'so.png', url: 'https://www.so.com/s?q=' },
                { name: '谷歌', img: 'google.png' },
                { name: '必应', img: 'bing.png' },
                { name: 'GitHub', img: 'github.png' },
                { name: 'Doge', img: 'doge_ico.png' },
                { name: '淘宝', img: 'taobao.png' }
            ],
            dialogTableVisible: false,
            colour: colour,
            keywords: ['前端', '文档', 'Vue', 'React', '在线工具', 'PPT', '图床', 'Node.js', 'Java', 'JavaScript', 'PHP', 'Redis', 'Nginx', 'ThinkPHP',
                '面试', '后台管理', '公众号', '桌面工具', '设计工具', '截图', 'Linux', 'Windows', '字体下载', '免费素材', 'App', '混合开发', 'Icon', '产品经理', '实用工具', '建站', 'UI框架']
        }
    },
    computed: {
        imgRequset() {
            return function (img) {
                return require('~/assets/images/logo/' + img)
            }
        },
    },
    created() {
        this.change();
    },
    methods: {
        openDialogTableVisible() {
            this.dialogTableVisible = true;
        },
        handleSearch() {
            if (this.$utils.delHtmlTagTrim(this.ks) == '') {
                this.$notify({
                    title: '提示信息',
                    message: `小可爱，检查输入有误`,
                    type: 'warning'
                });
            } else {
                if (this.select === 'logo.png') {
                    this.$router.push({ path: '/search', query: { ks: this.ks } })
                } else {
                    this.handleSelect();
                }
            }
        },
        change() {
            let index = this.options.findIndex(findKey('img', this.select));
            this.selectItem = this.options[index];
        },
        querySearch(queryString, cb) {
            let arr = [];
            if (this.ks) {
                if (this.select === 'baidu.png') {
                    baidu({ wd: this.ks }).then((res) => {
                        let { s } = res;
                        if (s && s.length) {
                            s.map((item, idx) => {
                                arr.push({ value: item })
                            })
                        }
                        cb(arr)
                    })
                    return false;
                }
                if (this.select === 'sogou.png') {
                    sougou({ key: this.ks }).then((res) => {
                        res[1].map((item) => {
                            arr.push({ value: item })
                        })
                        cb(arr)
                    })
                    return false;
                }
                if (this.select === 'so.png') {
                    haosou({ word: this.ks }).then((res) => {
                        res.result.map((item) => {
                            arr.push({ value: item.word })
                        })
                        cb(arr)
                    })
                    return false;
                }
                cb(arr)
            } else {
                cb(arr)
            }
        },
        handleSelect(item) {
            if (this.selectItem.url) {
                let url = this.selectItem.url + this.ks;
                window.open(url)
            }
        },
    }
}
</script>
<style lang="less" scoped>
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
.custom-search {
    border-radius: 6px;
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
.search /deep/ .el-input-group__append {
    border-color: #ffd100 !important;
}
.search /deep/ .el-autocomplete {
    display: block;
}
.search /deep/ .el-input-group__prepend {
    width: 100px;
}
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
                padding: 6px 14px;
                margin-right: 10px;
                margin-bottom: 10px;
                font-size: 14px;
                line-height: 14px;
                color: #ffffff;
                cursor: pointer;
                border-radius: 15px;
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