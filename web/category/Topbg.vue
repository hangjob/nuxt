<template>
    <div class="wp">
        <div class="topbg">
            <div class="slides_control">
                <nuxt-link :to="`/article/${detail.data[0].id}`">
                    <div class="item-desc">
                        <h4>{{detail.data[0].title}}</h4>
                        <p>{{detail.data[0].describe}}</p>
                    </div>
                    <img :src="detail.data[0].pic" :alt="detail.data[0].title" />
                </nuxt-link>
            </div>
            <div class="item1">
                <nuxt-link :to="`/article/${detail.data[1].id}`">
                    <img :src="detail.data[1].pic" :alt="detail.data[1].title" />
                </nuxt-link>
                <nuxt-link :to="`/article/${detail.data[2].id}`">
                    <img :src="detail.data[2].pic" :alt="detail.data[2].title" />
                </nuxt-link>
            </div>
            <div class="item2">
                <nuxt-link :to="`/article/${detail.data[3].id}`">
                    <h3>{{detail.data[3].title}}</h3>
                    <img :src="detail.data[3].pic" :alt="detail.data[3].title" />
                </nuxt-link>
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
.topbg {
    display: flex;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
    a {
        display: block;
        overflow: hidden;
        height: 100%;
        position: relative;
        border-radius: 4px;
        h3 {
            position: absolute;
            color: #fff;
            font-size: 18px;
            z-index: 999;
            top: 50%;
            left: 50%;
            text-align: center;
            width: 100%;
            transform: translate(-50%, -50%);
            padding: 10px;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
        .item-desc {
            position: absolute;
            color: #fff;
            z-index: 999;
            top: 100%;
            left: 50%;
            text-align: center;
            width: 100%;
            transform: translate(-50%, -50%);
            padding: 10px;
            box-sizing: border-box;
            transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
            filter: alpha(opacity= 0);
            opacity: 0;
            h4 {
                font-size: 18px;
                margin-bottom: 10px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            p {
                font-size: 14px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;
        }
        &:hover::before {
            background: rgba(0, 0, 0, 0.3);
        }
        &:hover .item-desc {
            top: 50%;
            filter: alpha(opacity= 100);
            opacity: 1;
        }
    }
    .slides_control {
        width: 640px;
        height: 340px;
        overflow: hidden;
    }
    .item1 {
        width: 300px;
        margin-left: 10px;
        display: flex;
        height: 340px;
        flex-direction: column;
        a {
            height: 165px;
            margin-bottom: 10px;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
    .item2 {
        margin-left: 10px;
        width: 330px;
        height: 340px;
    }
}
</style>