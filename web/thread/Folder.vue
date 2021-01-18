<template>
    <div class="folder">
        <div class="wp">
            <div class="folder-wrap">
                <div class="title">
                    <span>知道你喜欢</span>
                </div>
                <div class="folder-album">
                    <div class="album-card" v-for="item in items" :key="item.id">
                        <div class="album-aspect">
                            <a
                                href
                                :style="{backgroundColor:todo.author.color}"
                                v-for="todo in item.navtag"
                                :key="todo.id"
                            >
                                <img class="pic" v-if="todo.pic" :src="todo.pic" alt />
                                <img class="icon" v-else :src="todo.icon" />
                            </a>
                        </div>
                        <div class="album-aspect-title">
                            <span>{{item.name}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { apiTaxonomicYoulike } from '@/api/taxonomic'
export default {
    props: {
        taxonomic: {
            type: Object,
            default: () => { }
        }
    },
    data() {
        return {
            items: []
        }
    },
    created() {
        this.apiTaxonomicYoulike();
    },
    methods: {
        apiTaxonomicYoulike() {
            apiTaxonomicYoulike({ id: this.taxonomic.parentid }).then((res) => {
                this.items = res.data;
            })
        }
    }
}
</script>
<style lang="less" scoped>
.folder {
    margin-top: 20px;
    &-wrap {
        background: #fff;
        border-radius: 6px;
        .title {
            padding: 0 20px;
            height: 56px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
                font-size: 16px;
                color: #444;
                line-height: 56px;
            }
        }
        .folder-album {
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            .album-card {
                width: 290px;
                .album-aspect {
                    display: flex;
                    flex-wrap: wrap;
                    border-radius: 6px;
                    overflow: hidden;
                    a {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100%;
                        overflow: hidden;
                        position: relative;
                        width: 50%;
                        height: 100px;
                        max-height: 100px;
                        min-height: 100px;
                        img {
                            object-fit: cover;
                        }
                        .pic {
                            width: 100%;
                            height: 100%;
                        }
                        .icon {
                            width: auto;
                            height: auto;
                            max-width: 85%;
                            max-height: 85%;
                            border-radius: 5px;
                        }
                    }
                }
                .album-aspect-title {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px;
                    span {
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        display: inline-block;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
}
</style>