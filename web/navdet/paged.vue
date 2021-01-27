<template>
    <div class="paged clearfix">
        <div
            class="prev previous"
            :style="{background: `linear-gradient(135deg,rgba(109,71,217,.92),rgba(249,61,102,.92)),url(${transmit.prv.pic ? transmit.prv.pic  : 'https://www.vipbic.com/public/www/pc/img/mdbg.f32f4f0a.svg'})`}"
        >
            <nuxt-link :to="$utils.navLink(transmit.prv)">
                <h5>{{transmit.prv.it_name}}—{{transmit.prv.describe}}</h5>
                <p>
                    <span>
                        <i style="margin-right: 5px" class="fa fa-angle-left"></i>上一篇
                    </span>
                    <span
                        style="float: right"
                    >{{$dayjs(transmit.prv.create_time).format('YYYY年MM月DD日 hh:mm:ss')}}</span>
                </p>
            </nuxt-link>
        </div>
        <div
            class="next previous"
            :style="{background: `linear-gradient(135deg,rgba(71,114,217,.92),rgba(0,220,175,.92)),url(${transmit.nxet.pic ? transmit.nxet.pic : 'https://www.vipbic.com/public/www/pc/img/mdbg.f32f4f0a.svg'}) no-repeat 50%`}"
        >
            <nuxt-link :to="$utils.navLink(transmit.nxet)">
                <h5>{{transmit.nxet.it_name}}—{{transmit.nxet.describe}}</h5>
                <p>
                    <span>{{$dayjs(transmit.nxet.create_time).format('YYYY年MM月DD日 hh:mm:ss')}}</span>
                    <span style="float: right">
                        下一篇
                        <i style="margin-left: 5px" class="fa fa-angle-right"></i>
                    </span>
                </p>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        transmit: {
            type: Object,
            default: () => { }
        }
    },
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