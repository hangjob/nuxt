<template>
    <div class="list">
        <div class="vol">
            <i class="iconfont vm iconfont-speak"></i>
            <span class="vm">{{item.taxonomic.name}}</span>
        </div>
        <nuxt-link :to="$utils.navLink(item)" class="title">{{item.it_name}}</nuxt-link>
        <nuxt-link :to="$utils.navLink(item)" class="des">{{item.describe}}</nuxt-link>
        <div class="content-bottom">
            <div class="join" @click="openWechat(item.url)">
                <span class="vm">
                    直接访问
                    <i class="el-icon-right"></i>
                </span>
            </div>
            <div class="avatar-box">
                <span
                    class="participant vm"
                >{{$dayjs(item.create_time).format('YYYY年 MM月 DD日 hh点mm分ss秒')}}</span>
            </div>
        </div>
        <div class="cover">
            <img :src="item.pic" :alt="item.describe" :title="item.it_name" />
        </div>
        <Attention :url="url" ref="attention"></Attention>
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
    data() {
        return {
            url: ''
        }
    },
    methods: {
        openWechat(url) {
            this.url = url;
            this.$nextTick(() => {
                this.$refs.attention.openWechat()
            })
        }
    }
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
    &:hover {
        .cover {
            right: 10px;
        }
    }
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
        display: inline-block;
        color: #544b4b;
    }
    .des {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        margin-right: 30%;
        line-height: 160%;
        color: #544b4b;
        display: inline-block;
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
            width: 120px;
            height: 42px;
            border-radius: 6px;
            color: #fff;
            background: #fbbeaa;
            font-weight: 600;
            font-size: 16px;
            text-align: center;
            margin-right: 24px;
            transition: all 0.3s;
            &:hover {
                background: #e96c59;
            }
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
        transition: all 0.3s;
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