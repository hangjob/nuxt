<template>
    <div class="search">
        <Header />
        <div class="wp clearfix">
            <div class="container">
                <div class="search-title">
                    <h2>文章</h2>
                    <p>关键词<span class="red">[{{ks ? ks : '尝试输入你想要搜索的'}}]</span>的搜索结果：{{items.length ? items.length + '条' :' '}}
                    </p>
                </div>
                <div class="search-tax">
                    <input
                        v-model="ks"
                        @keyup.enter="apiNavtagSearch"
                        type="text"
                        placeholder="在「文章」中搜索"
                    />
                </div>
                <div class="search-items">
                    <ul>
                        <li v-for="(item,index) in items" :key="index">
                            <Item :detail="item" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import Item from '@/web/search/item'
import { apiNavtagSearch } from '@/api/index'
const processData = (arr) => {
    arr.forEach(item => {
        item.isArticle = true;
    });
    return arr;
}
export default {
    components: {
        Item
    },
    async asyncData({ $axios, app, store, params, query }) {
        let ks = query.ks ? query.ks : '';
        let res = await apiNavtagSearch({ ks });
        let arr = []
        arr.push(...res.data.nav);
        let article = processData(res.data.article);
        arr.push(...article);
        // nav.push(...processData(article));
        return {
            items: arr,
            ks: ks
        }
    },

    methods: {
        async apiNavtagSearch() {
            const res = await apiNavtagSearch({ ks: this.ks });
            let arr = []
            arr.push(...res.data.nav);
            let article = processData(res.data.article);
            arr.push(...article);
            this.items = arr;
        }
    }
}
</script>
<style lang="less" scoped>
.search {
    .container {
        border-radius: 4px;
        background-color: #fff;
        padding: 10px 20px;
        .search-title {
            h2 {
                font-size: 20px;
                font-weight: 200;
            }
            p {
                margin: 10px 0;
                font-size: 12px;
                color: #999;
                span {
                    color: red;
                }
            }
        }
        .search-tax {
            position: relative;
            display: flex;
            padding: 0 10px 10px;
            border-bottom: 1px solid #f3f3f3;
            margin: 0 -20px;
            input {
                background-color: #f5f5f5;
                border-radius: 50px;
                border: 1px solid #f3f3f3;
                -webkit-appearance: none;
                outline: none;
                -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
                box-sizing: border-box;
                width: 100%;
                font-size: 14px;
                padding: 7px 10px 7px 38px;
                box-sizing: border-box;
            }
        }
        .search-items {
            ul {
                display: flex;
                flex-flow: wrap;
                margin: 0 -10px;
                li {
                    width: 25%;
                    padding: 10px;
                }
            }
        }
    }
}
</style>