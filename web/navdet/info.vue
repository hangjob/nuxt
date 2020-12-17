<template>
    <div class="info">
        <div>
            <h1>{{detail.it_name}}</h1>
            <div class="tag">
                <div>
                    <i class="iconfont icon-shijian"></i>
                    <span>{{$dayjs(detail.create_time).format('YYYY年 MM月 DD日 hh点mm分ss秒')}}</span>
                </div>
                <div>
                    <i class="iconfont icon-chakan"></i>
                    <span>{{detail.like}}次浏览</span>
                </div>
                <div>
                    <i class="iconfont icon-dianzan5"></i>
                    <span>0个小可爱收藏</span>
                </div>
            </div>
            <div class="guanzhu">
                <div class="attention">
                    <i class="iconfont icon-shoucang"></i>
                </div>
            </div>
            <div class="huo">
                <i class="iconfont icon-huo"></i>
                <span>44274°</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        detail: {
            type: Object,
            default: () => { }
        }
    },
}
</script>
<style lang="less" scoped>
.info {
    border-radius: 6px;
    padding: 20px 20px;
    position: relative;
    background: #fff;
    min-height: 30px;
    position: relative;
    margin-bottom: 20px;
    h1 {
        color: #444;
        font-size: 20px;
        line-height: 50px;
        font-weight: 700;
        text-transform:capitalize
    }
    .tag {
        display: flex;
        align-items: center;
        color: #999;
        > div {
            display: flex;
            align-items: center;
            margin-right: 10px;
            i {
                font-size: 14px;
                line-height: 1;
                margin-right: 3px;
            }
        }
    }
    .guanzhu {
        position: absolute;
        right: 10px;
        bottom: 5px;
        z-index: 10;
        cursor: pointer;
        i {
            color: #ffd100;
            font-size: 28px;
        }
    }
    .huo {
        position: absolute;
        right: 10px;
        top: 5px;
        display: flex;
        align-items: center;
        i {
            font-size: 26px;
            color: #ff701b;
        }
        span {
            font-size: 26px;
            color: #ff701b;
        }
    }
}
</style>