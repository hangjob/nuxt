<template>
    <div class="like">
        <div class="wp">
            <!-- <div class="like-zan" @click="addlike">
                <i class="iconfont icon-zan"></i>
                <span v-if="detail.like">{{detail.like}}</span>
            </div>
            <div class="like-describe">
                <template v-if="detail.zan.length">
                    -
                    <span>{{detail.zan.length}}</span>位小可爱推荐 -
                </template>
                <template v-else>
                    -
                    <span>觉的它帮到了你，就点一下!</span>-
                </template>
            </div>
            <div class="like-user">
                <a href v-for="item in detail.zan" :key="item.id">
                    <img :src="item.member.userhead" alt />
                </a>
            </div>-->
            <div class="leave">
                <a href="javascript:;" @click="openUrl">
                    立即访问
                    <i class="el-icon-right"></i>
                </a>
            </div>
        </div>
        <Attention :url="detail.url" ref="attention"></Attention>
    </div>
</template>
<script>
import { apiDiscussAddlike } from '@/api/index'
export default {
    props: {
        detail: {
            type: Object,
            default: () => { }
        }
    },
    data() {
        return {
            isZan: false,
        }
    },
    methods: {
        addlike() {
            if (this.isZan) {
                return false;
            }
            apiDiscussAddlike({ id: this.$route.params.id })
                .then((res) => {
                    this.$notify({
                        title: '点赞',
                        message: '点赞成功',
                        type: 'success'
                    });
                    this.detail.like += 1;
                    this.isZan = true;
                })
        },
        openUrl(){
            this.$refs.attention.openWechat() 
        }
    }
}
</script>
<style lang="less" scoped>
.like {
    background-color: #fff;
    padding: 20px 0;
    border-bottom: 1px solid #eee;
    .leave {
        text-align: center;
        a {
            color: #fff;
            display: inline-block;
            padding: 8px 20px;
            font-size: 14px;
            border-radius: 4px;
            background-color: #ffd100;
            border-color: #ffd100;
            color: #fff;
        }
    }
    &-zan {
        width: 130px;
        height: 72px;
        position: relative;
        display: flex;
        flex-flow: column;
        align-items: center;
        background-color: #ffe300;
        margin: 0 auto;
        border-radius: 50px;
        padding: 5px 0;
        cursor: pointer;
        box-sizing: border-box;
        justify-content: space-evenly;
        i {
            font-size: 28px;
            line-height: 1;
            color: #f29555;
            transition: all 0.3s;
        }
        span {
            font-size: 16px;
            line-height: 1;
            color: #282828;
        }
        &:hover {
            i {
                color: red;
            }
        }
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