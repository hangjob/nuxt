<template>
    <div class="navlist">
        <div class="tit">
            <h2>热榜</h2>
        </div>
        <ul class="clearfix">
            <li>
                <a href="/study/16.html">
                    <img src="https://www.2qj.com/Public/Upload/Study/3GUWGZ3xlQlu1kW.jpg" alt />
                    <span class="btn btn-green">立即访问</span>
                    <h2>设计理论知识成长路径</h2>
                </a>
                <p>知其然知其所以然</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.navlist {
    .tit {
        margin: 0 0 22px;
        h2 {
            line-height: 30px;
            font-size: 24px;
            color: #666;
        }
    }
    ul {
        margin-right: -20px;
        li {
            width: 640px;
            padding: 0 0 20px;
            margin: 0 20px 30px 0;
            background: #fff;
            overflow: hidden;
            float: left;
            box-sizing: border-box;
            border-radius: 4px;
            a {
                position: relative;
                display: block;
                img {
                    display: block;
                    margin-bottom: 20px;
                    border: 0;
                    max-width: 100%;
                    width: 100%;
                    object-fit: cover;
                    height: 240px;
                }
                span {
                    position: absolute;
                    top: 192px;
                    right: 16px;
                    overflow: hidden;
                    height: 40px;
                    line-height: 40px;
                    padding: 0 20px;
                    font-size: 18px;
                    color: #fff;
                    border-radius: 3px;
                    display: inline-block;
                    vertical-align: middle;
                    color: #fff;
                    background: #2ed25d;
                }
                h2 {
                    overflow: hidden;
                    height: 34px;
                    line-height: 34px;
                    margin: 0 30px;
                    color: #333;
                    font-size: 20px;
                    font-weight: 400;
                }
            }
            p {
                overflow: hidden;
                height: 28px;
                line-height: 28px;
                margin: 0 30px;
                color: #666;
                font-size: 14px;
            }
        }
    }
}
</style>