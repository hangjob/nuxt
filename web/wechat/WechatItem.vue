<template>
    <div class="wechat-item">
        <div class="title">
            <div class="title-logo"></div>
            <div class="title-name">微博</div>
            <div class="title-sg">热搜</div>
        </div>
        <div class="content">
            <ul>
                <li>
                    <a href>
                        <span class="content-idx">1</span>
                        <span class="content-title">美术老师9万颗钉子复原宋代山水画</span>
                        <span class="content-time"></span>
                    </a>
                </li>
                <li>
                    <a href>
                        <span class="content-idx">1</span>
                        <span class="content-title">美术老师9万颗钉子复原宋代山水画</span>
                        <span class="content-time">2020-02-21 22:31:31</span>
                    </a>
                </li>
                <li>
                    <a href>
                        <span class="content-idx">1</span>
                        <span class="content-title">美术老师9万颗钉子复原宋代山水画</span>
                        <span class="content-time"></span>
                    </a>
                </li>
                <li>
                    <a href>
                        <span class="content-idx">1</span>
                        <span class="content-title">美术老师9万颗钉子复原宋代山水画</span>
                        <span class="content-time">2020-02-21 22:31:31</span>
                    </a>
                </li>
                <li>
                    <a href>
                        <span class="content-idx">1</span>
                        <span class="content-title">美术老师9万颗钉子复原宋代山水画</span>
                        <span class="content-time"></span>
                    </a>
                </li>
                <li>
                    <a href>
                        <span class="content-idx">1</span>
                        <span class="content-title">美术老师9万颗钉子复原宋代山水画</span>
                        <span class="content-time">2020-02-21 22:31:31</span>
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
.wechat-item {
    background-color: #fff;
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
    .title {
        display: flex;
        align-items: center;
        justify-content: left;
        border-bottom: 1px solid #ebebeb;
        padding-bottom: 10px;
        &-name {
            font-size: 22px;
            font-weight: bold;
            flex: 1;
        }
    }
    .content {
        ul {
            li {
                a {
                    display: flex;
                    justify-content: left;
                    font-size: 16px;
                    color: #1a1a1a;
                    align-items: center;
                    padding: 10px 0;
                    span {
                        line-height: 1;
                    }
                    .content-idx {
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
                    .content-title {
                        flex: 1;
                    }
                    .content-time {
                        color: rgba(0, 0, 0, 0.54);
                        max-width: 100px;
                        height: 22px;
                        line-height: 22px;
                        overflow: hidden;
                    }
                }
            }
        }
    }
}
</style>