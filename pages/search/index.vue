<template>
    <div class="search">
        <Header />
        <div class="wp clearfix">
            <div class="container">
                <div class="search-title">
                    <h2>文章</h2>
                    <p>
                        关键词
                        <span class="red">[测试]</span>的搜索结果：
                    </p>
                </div>
                <div class="search-tax">
                    <input type="text" placeholder="在「文章」中搜索" />
                </div>
                <div class="search-items">
                    <ul>
                        <li>
                            <Item />
                        </li>
                        <li>
                            <Item />
                        </li>
                        <li>
                            <Item />
                        </li>
                        <li>
                            <Item />
                        </li>
                        <li>
                            <Item />
                        </li>
                        <li>
                            <Item />
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
export default {
    components: {
        Item
    },
    async asyncData({ $axios, app, store, params }) {
        let id = params.id ? params.id : 1;
        const res = await apiNavtagSearch();
        return {
            items: res.data,
        }
    },
    created(){
        setTimeout(()=>{
            console.log(this.items)
        },2000)
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