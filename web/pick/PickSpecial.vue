<template>
    <div class="pick-special">
        <div class="item-thumb">
            <a :href="'https://www.vipbic.com/ranked.html?id='+detail.id" target="_blank">
                <img :src="detail.icon" :alt="detail.des" />
            </a>
            <div class="number">专题:{{index+1}}期</div>
        </div>
        <div class="item-info">
            <h2>{{detail.name}}</h2>
            <p>{{$dayjs(detail.create_time).format('MM月 DD日')}}-{{detail.des}}</p>
        </div>
        <div class="item-nav">
            <ul>
                <li v-for="(item,index) in detail.items" :key="item.id">
                    <span>{{index+1}}</span>
                    <nuxt-link :to="$utils.navLink(item)">{{item.describe}}</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        detail: {
            type: Object,
            default: () => { }
        },
        index: {
            type: Number | String,
            default: 1
        }
    },
}
</script>
<style lang="less" scoped>
.pick-special {
    width: 640px;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    .item-thumb {
        height: 225px;
        position: relative;
        overflow: hidden;
        a {
            display: block;
            height: 100%;
            img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
        .number {
            padding: 8px 18px;
            position: absolute;
            z-index: 2;
            left: 0;
            top: 30px;
            border-radius: 0 4px 4px 0;
            font-size: 13px;
            background-color: #e32c28;
            color: #fff;
        }
    }
    .item-info {
        border-bottom: 1px solid #efefef;
        padding: 15px;
        h2 {
            font-size: 20px;
            font-weight: 700;
        }
        p {
            font-size: 12px;
            color: #999;
            margin-top: 5px;
        }
    }
    .item-nav {
        ul {
            padding: 10px 0;
            li {
                padding: 10px 15px;
                font-size: 15px;
                display: flex;
                line-height: 1.4;
                align-items: center;
                box-sizing: border-box;
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
                a {
                    color: #5d5d5d;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    flex: 1;
                    display: inline-block;
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
            }
        }
    }
}
</style>