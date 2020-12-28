<template>
    <div class="main-right">
        <div class="main-right-items">
            <h4>相关文章</h4>
            <div class="list">
                <ul>
                    <li v-for="(item,index) in detailObject.new" :key="item.id">
                        <a href>
                            <span>{{index+1}}</span>
                            <p>{{item.title}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main-right-items">
            <h4>最新收录</h4>
            <div class="list">
                <ul>
                    <li v-for="(item,index) in detailObject.record" :key="item.id">
                        <a href>
                            <span>{{index+1}}</span>
                            <p>{{item.it_name}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main-right-items" v-if="detailObject.wx">
            <h4>公众号文章</h4>
            <div class="list">
                <ul>
                    <li v-for="(item,index) in detailObject.wx" :key="item.id">
                        <a href>
                            <span>{{index+1}}</span>
                            <p>{{item.ArticleTitle}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main-right-items" v-if="detailObject.wxsj">
            <h4>相关资讯</h4>
            <div class="list">
                <ul>
                    <li v-for="(item,index) in detailObject.wxsj" :key="item.id">
                        <a href>
                            <span>{{index+1}}</span>
                            <p>{{item.ArticleTitle}}</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        detailObject: {
            type: Object,
            default: () => { }
        }
    },
}
</script>
<style lang="less" scoped>
.main-right {
    width: 300px;
    margin-top: 30px;
    &-items {
        background-color: #fff;
        margin-bottom: 30px;
        h4 {
            height: 45px;
            line-height: 45px;
            font-size: 18px;
            font-weight: bold;
            color: #fff;
            width: 100%;
            background: url(~@/assets/images/4.png) no-repeat 0 0;
            text-indent: 20px;
        }
        &:nth-of-type(2) {
            h4 {
                background-position: 0 -106px;
            }
        }
        &:nth-of-type(3) {
            h4 {
                background-position: 0 -197px;
            }
        }
        &:nth-of-type(4) {
            h4 {
                background-position: 0 -294px;
            }
        }
        .list {
            padding: 10px 15px;
            ul {
                li {
                    position: relative;
                    overflow: hidden;
                    a {
                        display: flex;
                        overflow: hidden;
                        color: #484848;
                        align-items: center;
                        line-height: 45px;
                        span {
                            display: inline-block;
                            width: 20px;
                            height: 20px;
                            text-align: center;
                            line-height: 20px;
                            background-color: #b0b0b0;
                            border-radius: 50%;
                            color: #fff;
                            margin-right: 5px;
                        }
                        p {
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            flex: 1;
                        }
                    }
                    &:nth-of-type(1) {
                        span {
                            background-color: #fd9800;
                        }
                    }
                    &:nth-of-type(2) {
                        span {
                            background-color: #ff3366;
                        }
                    }
                    &:nth-of-type(3) {
                        span {
                            background-color: #469bfa;
                        }
                    }
                    &:nth-of-type(4) {
                        span {
                            background-color: #67c23a;
                        }
                    }
                    &:nth-of-type(5) {
                        span {
                            background-color: #ffd100;
                        }
                    }
                    &:nth-of-type(6) {
                        span {
                            background-color: #26cb7c;
                        }
                    }
                }
            }
        }
    }
}
</style>