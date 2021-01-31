<template>
    <div class="mavon-editor">
        <Header />
        <div class="wp clearfix">
            <div class="tab">
                <h2>
                    <nuxt-link to="/write">发布网址</nuxt-link>
                </h2>
                <h2>
                    <nuxt-link to="/publish" class="cur">发布文章</nuxt-link>
                </h2>
            </div>
            <MavonAdd :isWrite="false" :detail="detail" :detail2="detail2" />
        </div>
        <Footer />
    </div>
</template>
<script>
import MavonAdd from '@/web/write/MavonAdd'
import { apiTaxonomicTypes, apiPrimaryTypes } from '@/api/taxonomic'
export default {
    components: {
        MavonAdd
    },
    async asyncData({ $axios, app, store, params }) {
        const res = await apiPrimaryTypes();
        const res2 = await apiTaxonomicTypes();
        return {
            detail: res,
            detail2: res2
        }
    },
}
</script>
<style lang="less" scoped>
.mavon-editor {
    width: 100%;
    height: 100%;
    .tab {
        position: relative;
        font-size: 0;
        color: #999;
        height: 60px;
        background: #fff;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        h2 {
            display: inline-block;
            vertical-align: top;
            margin-right: 64px;
            font-size: 16px;
            margin: 0 32px;
            color: #333;
            font-weight: 400;
            a {
                position: relative;
                display: block;
                color: #666;
            }
            .cur {
                color: #0084ff;
                font-weight: 700;
                &::before {
                    content: '';
                    position: absolute;
                    bottom: -14px;
                    left: 50%;
                    width: 20px;
                    height: 2px;
                    margin: 0 0 0 -10px;
                    background: #0084ff;
                }
            }
        }
    }
}
</style>