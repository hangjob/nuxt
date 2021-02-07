<template>
    <div class="intera">
        <Header />
        <div class="wp clearfix">
            <div class="content">
                <div class="left">
                    <make @addSuccess="addSuccess" />
                    <list :detail="item" v-for="item in items" :key="item.id" />
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
                <div class="right">
                    <user />
                    <youce />
                    <widget />
                    <rightWeather />
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
import make from '@/web/intera/make'
import list from '@/web/intera/list'
import user from '@/web/intera/user'
import youce from '@/web/intera/youce'
import widget from '@/web/intera/widget'
import rightWeather from '@/web/intera/weather'
import { apiLeaveItems } from '@/api/leave'

export default {
    components: {
        make,
        list,
        user,
        youce,
        widget,
        rightWeather
    },
    head() {
        return {
            script: [

            ]
        }
    },
    mounted() {
        setTimeout(() => {
            console.log(this.items)
        }, 3000)
    },
    async asyncData({ $axios, app, store, params }) {
        const res = await apiLeaveItems();
        return {
            items: res.data.data,
            total: res.data.total
        }
    },
    methods: {
        async apiLeaveItems({ page }) {
            const listData = await apiLeaveItems({ page: page })
            this.items = listData.data;
            this.total = listData.data.total;
        },
        currentChange(page) {
            this.apiLeaveItems({ page })
        },
        addSuccess() {
            this.currentChange({ page: 1 });
        }
    }
}
</script>
<style lang="less" scoped>
.intera {
    .content {
        display: flex;
        .left {
            flex: 1;
            .page {
                margin-top: 20px;
                text-align: right;
            }
        }
        .right {
            width: 300px;
            padding-left: 20px;
            box-sizing: border-box;
        }
    }
}
</style>