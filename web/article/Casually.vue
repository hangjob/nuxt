<template>
    <div class="casually">
        <div class="title">
            <h2>
                <i></i>随便看看
            </h2>
        </div>
        <div class="list">
            <ul>
                <li>
                    <a>
                        <div class="thumb">
                            <img src="https://www.vipbic.com/public/www/pc/img/7.cc9a928e.png" alt />
                        </div>
                        <div class="title">
                            <h2>小半 | 青年生产力指南</h2>
                            <time>202012331</time>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.casually {
    border-radius: 6px;
    background-color: #fff;
    overflow: hidden;
    margin-top: 10px;
    .title {
        font-size: 12px;
        padding: 12px 10px;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .list {
        ul {
            li {
                font-size: 13px;
                padding: 10px;
                border-top: 1px solid #f3f3f3;
                a {
                    display: flex;
                    .thumb {
                        width: 83px;
                        height: 51px;
                        img {
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }
                    .title {
                        height: 51px;
                        h2 {
                            display: -webkit-box;
                            -webkit-box-orient: vertical;
                            -webkit-line-clamp: 2;
                            overflow: hidden;
                            max-height: 52px;
                            font-size: 13px;
                        }
                        time {
                            font-size: 12px;
                            color: #bcbcbc;
                            margin-top: 5px;
                        }
                    }
                }
            }
        }
    }
}
</style>