<template>
    <div class="dh-box">
        <div class="tit clearfix">
            <div class="fr more">小致提示：Ctrl+D 快速收藏我们哦 ~</div>
            <span class="line bg-blue"></span>
            <h2>推荐站点</h2>
        </div>
        <div class="list-tj">
            <ul class="clearfix">
                <li>
                    <a href="https://www.behance.net/" target="_blank" rel="nofollow">
                        <img
                            src="https://old.zhisheji.com/source/plugin/zsj_dest/upload/5b444f8e9ff2f.jpg?v=202018"
                        />
                        <p>Behace</p>
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
.dh-box {
    margin-bottom: 20px;
    background: #fff;
    *zoom: 1;
    border-radius: 4px;
    .tit {
        line-height: 60px;
        font-size: 0;
        border-bottom: 1px solid #f3f3f3;
        .more {
            margin-right: 24px;
            font-size: 14px;
            color: #999;
            float: right;
            cursor: pointer;
        }
        .line {
            overflow: hidden;
            display: inline-block;
            vertical-align: middle;
            width: 3px;
            height: 18px;
            margin-right: 22px;
            line-height: 18px;
            background: #0f92fb;
        }
        h2 {
            display: inline-block;
            vertical-align: middle;
            font-size: 16px;
            color: #333;
            font-weight: 700;
        }
    }
    .list-tj {
        padding: 0 0 24px 4px;
        ul {
            li {
                overflow: hidden;
                float: left;
                width: 181px;
                margin: 20px 0 0 20px;
                a {
                    color: #333;
                    display: inline-block;
                    position: relative;
                    &:hover p {
                        bottom: 0;
                    }
                    img {
                        border-radius: 4px;
                        vertical-align: top;
                        border: 0;
                        max-width: 100%;
                    }
                    p {
                        position: absolute;
                        bottom: -36px;
                        left: 0;
                        width: 100%;
                        padding: 0 14px;
                        height: 36px;
                        line-height: 36px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        border-radius: 0 0 4px 4px;
                        color: #fff;
                        background: #000;
                        background: rgba(0, 0, 0, 0.6);
                        transition: all 0.3s ease;
                    }
                }
            }
        }
    }
}
</style>