<template>
    <div class="main-left">
        <Special :specialData="specialData" />
        <IndexBanner :specialData="specialData" />
        <div class="items">
            <nuxt-link
                :to="`/thread/${item.id}`"
                class="item"
                v-for="(item,index) in listData.data"
                :key="index"
            >
                <div class="item-bg" :style="{backgroundImage: `url(${item.pic})`}"></div>
                <div class="item-mask">
                    <div class="item-mask-container">
                        <h2>{{item.it_name}}・{{item.taxonomic.name}}</h2>
                        <p>
                            <span>{{item.member.username}}・</span>
                            <span>{{$dayjs(item.create_time).format('dddd YYYY年MM月DD日 hh:mm:ss')}}・</span>
                            <span>{{item.taxonomic.primary.name}}</span>
                        </p>
                    </div>
                </div>
            </nuxt-link>
        </div>
        <div class="page">
            <el-pagination
                @current-change="currentChange"
                background
                layout="prev, pager, next"
                :total="total"
                :page-size="12"
            ></el-pagination>
        </div>
    </div>
</template>
<script>
import IndexBanner from './components/IndexBanner'
import Special from './components/Special'
export default {
    props: {
        listData: {
            type: Object,
            default: () => { }
        },
        total: {
            type: Number,
            default: 0
        },
        specialData: Array,
    },
    components: {
        IndexBanner,
        Special
    },
    data() {
        return {

        }
    },
    methods: {
        currentChange(page) {
            this.$emit('apiNavtagItems', { page })
        }
    }
}
</script>
<style lang="less" scoped>
.main-left {
    width: 850px;
    margin-top: 20px;
    .items {
        position: relative;
        .item {
            border-radius: 6px;
            display: inline-block;
            width: 100%;
            overflow: hidden;
            background-color: #fff;
            position: relative;
            transition: all 0.3s ease;
            height: 280px;
            vertical-align: bottom;
            margin-bottom: 40px;
            &-bg {
                display: block;
                width: 100%;
                height: 100%;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: 50%;
                position: absolute;
                left: 0;
                top: 0;
                overflow: hidden;
                opacity: 1;
                transition: opacity 1s ease;

                &::before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.07);
                }
            }
            &-mask {
                background: rgba(0, 0, 0, 0.1);
                position: relative;
                z-index: 10;
                display: table;
                vertical-align: middle;
                width: 100%;
                height: 100%;
                &-container {
                    padding: 20px 20px;
                    text-align: center;
                    display: table-cell;
                    width: 100%;
                    height: 100%;
                    vertical-align: middle;
                    h2 {
                        font-size: 20px;
                        font-weight: 600;
                        color: #fff;
                        margin-bottom: 10px;
                    }
                    p {
                        span {
                            color: #eee;
                            font-size: 18px;
                            text-align: center;
                            font-weight: 400;
                        }
                    }
                }
            }
            &:hover {
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                transform: translateY(-4px) scale(1.02);
            }
            &:last-child {
                margin-bottom: 30px;
            }
        }
    }
    .page {
        text-align: right;
    }
}
</style>