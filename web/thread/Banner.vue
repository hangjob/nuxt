<template>
    <div class="thread-banner">
        <div class="items wp">
            <div class="item" v-for="item in items" :key="item.id">
                <img :src="item.img" alt />
            </div>
        </div>
    </div>
</template>
<script>
import { apiTaobaoItems } from '@/api/taobao'
export default {
    data() {
        return {
            items: []
        }
    },
    created() {
        this.apiTaobaoItems();
    },
    methods: {
        apiTaobaoItems() {
            apiTaobaoItems().then((res) => {
                this.items = res.data;
            })
        }
    }
}
</script>
<style lang="less" scoped>
.thread-banner {
    border-bottom: 1px solid #eee;
    padding: 12px 0;
    background: #fff;
    .items {
        display: flex;
        justify-content: space-between;
        .item {
            width: 49%;
            height: 130px;
            border-radius: 6px;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
}
</style>