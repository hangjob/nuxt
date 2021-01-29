<template>
    <div class="item">
        <div class="container">
            <div class="thumb">
                <nuxt-link v-if="detail.pic" :to="$utils.navLink(detail)">
                    <img :src="detail.pic" alt />
                </nuxt-link>
                <nuxt-link
                    v-else
                    :to="$utils.navLink(detail)"
                    class="big"
                    :style="{backgroundColor:detail.author.color}"
                >
                    <img :src="detail.icon" alt />
                </nuxt-link>
            </div>
            <div class="info">
                <h2>
                    <nuxt-link
                        :to="$utils.navLink(detail)"
                    >{{detail.it_name ? detail.it_name : detail.title}}</nuxt-link>
                </h2>
                <div class="excerpt">{{detail.describe}}</div>
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
.item {
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #f3f3f3;
    border-right: 1px solid #f3f3f3;
    box-shadow: -1px 0px 0px #f3f3f3;
    margin-bottom: -1px;
    transition: box-shadow 0.3s;
    .container {
        .thumb {
            flex-shrink: 0;
            max-height: 140px;
            min-height: 140px;
            height: 140px;
            a {
                border-radius: 3px;
                position: relative;
                display: block;
                height: 100%;
                overflow: hidden;
                img {
                    width: 100%;
                    transition: all 0.3s;
                    -o-object-fit: cover;
                    object-fit: cover;
                    height: 100%;
                }
            }
            a.big {
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    width: auto;
                    height: auto;
                    max-width: 85%;
                    max-height: 85%;
                    border-radius: 5px;
                }
            }
        }
        .info {
            padding: 10px;
            h2 {
                a {
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 1;
                    overflow: hidden;
                    font-size: 15px;
                    color: #333;
                    transition: all 0.3s;
                    &:hover{
                        color: black;
                    }
                }
            }
            .excerpt {
                font-size: 13px;
                color: #999;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
                text-justify: inter-ideograph;
                word-break: break-all;
                margin-top: 5px;
                min-height: 40px;
                max-height: 40px;
            }
        }
    }
}
</style>