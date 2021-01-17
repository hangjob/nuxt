<template>
    <div class="figure-detail">
        <Header />
        <div class="wp clearfix">
            <div class="items">
                <div class="item" v-for="(item,index) in items" :key="index">
                    <a href>
                        <img
                            src="https://reviveimg.hellorf.com/www/images/b9cc14e76a93dccaedfa0aa16a672971.jpg"
                            alt
                        />
                    </a>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: 6
        }
    }
}
</script>
<style lang="less" scoped>
.figure-detail {
    .items {
        display: flex;
        flex-wrap: wrap;
        .item {
            width: 20%;
            padding: 10px 5px;
            box-sizing: border-box;
            a{
                display: block;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
}
</style>