<template>
    <div class="paged clearfix">
        <div
            class="prev previous"
            style="background: linear-gradient(135deg,rgba(109,71,217,.92),rgba(249,61,102,.92)),url(https://www.vipbic.com/public/www/pc/img/mdbg.f32f4f0a.svg);"
        >
            <a href="/navdet/81.html">
                <h5>Ant Design-一个服务于企业级产品的设计体系，基于『确定』和『自然』的设计价值观和模块化的解决方案，让设计者专注于更好的用户体验</h5>
                <p>
                    <span>
                        <i style="margin-right: 5px" class="fa fa-angle-left"></i>上一篇
                    </span>
                    <span style="float: right">2018年07月28日&nbsp;&nbsp;星期六</span>
                </p>
            </a>
        </div>
        <div
            class="next previous"
            style="background: linear-gradient(135deg,rgba(71,114,217,.92),rgba(0,220,175,.92)),url(https://www.vipbic.com/public/www/pc/img/mdbg.f32f4f0a.svg) no-repeat 50%;"
        >
            <a href="/navdet/79.html">
                <h5>wenyi-文艺范儿——文艺青年聚集地！</h5>
                <p>
                    <span>2018年07月28日&nbsp;&nbsp;星期六</span>
                    <span style="float: right">
                        下一篇
                        <i style="margin-left: 5px" class="fa fa-angle-right"></i>
                    </span>
                </p>
            </a>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.paged {
    overflow: hidden;
    padding-bottom: 20px;
    .prev {
        float: left;
    }
    .next {
        float: right;
    }
    .previous {
        position: relative;
        width: 49%;
        color: #fff;
        background-size: cover;
        background-position: 50%;
        border-radius: 6px;
        overflow: hidden;
        height: 120px;
        box-sizing: border-box;
        &::before {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            content: '';
            transition: all 0.2s;
        }
        &:hover {
            &::before {
                background: rgba(0, 0, 0, 0.7);
            }
        }
        a {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            color: #fff;
            padding: 15px 10px;
            h5 {
                color: #fff;
                font-size: 16px;
                line-height: 26px;
                margin-top: 0;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                height: 55px;
            }
            p {
                color: #fff;
                margin-bottom: 0;
            }
        }
    }
}
</style>