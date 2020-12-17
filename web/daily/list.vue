<template>
    <div class="list">
        <div class="vol">
            <i class="iconfont vm iconfont-speak"></i>
            <span class="vm">讨论VOL</span>
        </div>
        <div class="title">你会考虑购买次世代主机吗？</div>
        <div
            class="des"
        >次世代主机（即将发售或发售不久的游戏主机）之争：索尼 PS5 与微软 Xbox Series X，你会考虑购买吗？会购买哪一台还是「我都要」？为什么？ 欢迎大家来聊聊自己的看法，有理有据，友好发言。</div>
        <div data-v-96510ae2 class="content-bottom">
            <div data-v-96510ae2 class="join">
                <span data-v-96510ae2 class="vm">现在参与</span>
                <i data-v-96510ae2 class="iconfont iconfont-arrow-right vm"></i>
            </div>
            <div data-v-96510ae2 class="avatar-box">
                <img
                    data-v-96510ae2
                    src="https://cdn.sspai.com/2020/07/25/avatar/e09029e88e6f1f55a84b2769d2853726.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!40x40r/gravity/Center/crop/40x40/interlace/1"
                    alt
                    class="avatar"
                />
                <img
                    data-v-96510ae2
                    src="https://cdn.sspai.com/2019/12/30/avatar/f8aabc2d905c8a2f5ac5b6911fe9638d.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!40x40r/gravity/Center/crop/40x40/interlace/1"
                    alt
                    class="avatar"
                />
                <span data-v-96510ae2 class="participant vm">30 位少数派已参与</span>
            </div>
        </div>
        <div data-v-96510ae2 class="cover">
            <img
                data-v-96510ae2
                src="https://cdn.sspai.com/article/ba406d41-b401-ed63-1ca1-7a964f03a0e6.png?imageMogr2/auto-orient/quality/95/thumbnail/!692x476r/gravity/Center/crop/692x476/interlace/1"
            />
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.list {
    color: #292525;
    background: #fff;
    border-radius: 16px;
    padding: 28px 52px;
    position: relative;
    margin-right: 173px;
    min-height: 238px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    .vol {
        .vm {
            font-weight: 600;
            font-size: 16px;
        }
    }
    .title {
        font-size: 28px;
        line-height: 39px;
        font-weight: 500;
        margin: 12px 30% 12px 0;
    }
    .des {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        margin-right: 30%;
        line-height: 160%;
        color: #544b4b;
    }
    .content-bottom {
        font-size: 16px;
        line-height: 22px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        .join {
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 126px;
            height: 46px;
            border-radius: 46px;
            color: #fff;
            background: #ffd100;
            font-weight: 600;
            font-size: 16px;
            text-align: center;
            margin-right: 24px;
            .vm {
                margin-left: auto;
            }
            i {
                font-size: 20px;
                margin-left: 4px;
                margin-right: 14px;
            }
        }
        .avatar-box {
            margin: 16px 0;
            text-align: center;
            img {
                width: 22px;
                height: 22px;
                border: 1px solid #f7f7f8;
                border-radius: 50%;
                margin-right: -13px;
            }
            .participant {
                text-align: center;
                margin: 16px 0;
                font-size: 16px;
                line-height: 22px;
                margin-left: 16px;
                color: #292525;
            }
        }
    }
    .cover {
        width: 346px;
        position: absolute;
        top: 50%;
        right: 0;
        transform: translate(50%, -50%);
        img {
            width: 100%;
            border-radius: 16px;
            vertical-align: middle;
        }
    }
}
</style>