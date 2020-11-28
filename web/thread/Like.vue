<template>
    <div class="like">
        <div class="wp">
            <div class="like-zan">
                <i>{{detail.like}}</i>
            </div>
            <div class="like-describe">
                -
                <span>{{detail.traffic.zan}}</span>位小可爱推荐 -
            </div>
            <div class="like-user">
                <a href v-for="item in detail.zan" :key="item.id">
                    <img
                        :src="item.member.userhead"
                        alt
                    />
                </a>
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
.like {
    background-color: #fff;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    &-zan {
        width: 118px;
        height: 72px;
        position: relative;
        display: flex;
        flex-flow: column;
        align-items: center;
        background-color: #ffe300;
        margin: 0 auto;
        border-radius: 50px;
        cursor: pointer;
        box-sizing: border-box;
    }
    &-describe {
        text-align: center;
        margin-top: 20px;
    }
    &-user {
        text-align: center;
        a {
            display: inline-block;
            margin: 20px 10px 0;
            img {
                width: 40px;
                height: 40px;
                border-radius: 50%;
            }
        }
    }
}
</style>