<template>
    <div class="list">
        <div class="vol">
            <i class="iconfont vm iconfont-speak"></i>
            <span class="vm">{{item.taxonomic.primary.mark}}</span>
        </div>
        <div class="title">{{item.it_name}}</div>
        <div class="des">{{item.describe}}</div>
        <div class="content-bottom">
            <div class="join">
                <span class="vm">
                    立即访问
                    <i class="el-icon-right"></i>
                </span>
            </div>
            <div class="avatar-box">
                <img
                    src="https://cdn.sspai.com/2020/07/25/avatar/e09029e88e6f1f55a84b2769d2853726.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!40x40r/gravity/Center/crop/40x40/interlace/1"
                    alt
                    class="avatar"
                />
                <img
                    src="https://cdn.sspai.com/2019/12/30/avatar/f8aabc2d905c8a2f5ac5b6911fe9638d.jpg?imageMogr2/auto-orient/quality/95/thumbnail/!40x40r/gravity/Center/crop/40x40/interlace/1"
                    alt
                    class="avatar"
                />
                <span class="participant vm">30 位少数派已参与</span>
            </div>
        </div>
        <div class="cover">
            <img :src="item.pic" :alt="item.describe" :title="item.it_name" />
        </div>
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => { }
        }
    },
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
                display: flex;
                align-items: center;
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
            height: 200px;
            object-fit: cover;
        }
    }
}
</style>