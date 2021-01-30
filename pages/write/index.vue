<template>
    <div class="mavon-editor">
        <Header />
        <div class="wp mavon-editor-container clearfix">
            <MavonAdd :detail="detail" :detail2="detail2"/>
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
    &-container {
        background-color: #fff;
        box-sizing: border-box;
        padding: 20px 0;
    }
}
</style>