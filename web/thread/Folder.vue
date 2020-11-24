<template>
    <div class="folder">
        <div class="wp">
            <div class="folder-wrap">
                <div class="title">
                    <span>收录收藏夹</span>
                </div>
                <div class="folder-album">
                    <div class="album-card">
                        <div class="album-aspect">
                            <a href>
                                <img src="https://w.wallhaven.cc/full/pk/wallhaven-pk3pv3.jpg" alt />
                            </a>
                            <a href>
                                <img src="https://w.wallhaven.cc/full/pk/wallhaven-pk3pv3.jpg" alt />
                            </a>
                            <a href>
                                <img src="https://w.wallhaven.cc/full/pk/wallhaven-pk3pv3.jpg" alt />
                            </a>
                            <a href>
                                <img src="https://w.wallhaven.cc/full/pk/wallhaven-pk3pv3.jpg" alt />
                            </a>
                        </div>
                        <div class="album-aspect-title">
                            <span>动画</span>
                        </div>
                    </div>
                    <div class="album-card">
                        <div class="album-aspect">
                            <a href>
                                <img src="https://w.wallhaven.cc/full/pk/wallhaven-pk3pv3.jpg" alt />
                            </a>
                            <a href>
                                <img src="https://w.wallhaven.cc/full/pk/wallhaven-pk3pv3.jpg" alt />
                            </a>
                            <a href>
                                <img src="https://w.wallhaven.cc/full/pk/wallhaven-pk3pv3.jpg" alt />
                            </a>
                            <a href>
                                <img src="https://w.wallhaven.cc/full/pk/wallhaven-pk3pv3.jpg" alt />
                            </a>
                        </div>
                        <div class="album-aspect-title">
                            <span>动画</span>
                        </div>
                    </div>
                    <div class="album-card">
                        <div class="album-aspect">
                            <a href>
                                <img src="https://w.wallhaven.cc/full/pk/wallhaven-pk3pv3.jpg" alt />
                            </a>
                            <a href>
                                <img src="https://w.wallhaven.cc/full/pk/wallhaven-pk3pv3.jpg" alt />
                            </a>
                            <a href>
                                <img src="https://w.wallhaven.cc/full/pk/wallhaven-pk3pv3.jpg" alt />
                            </a>
                            <a href>
                                <img src="https://w.wallhaven.cc/full/pk/wallhaven-pk3pv3.jpg" alt />
                            </a>
                        </div>
                        <div class="album-aspect-title">
                            <span>动画</span>
                        </div>
                    </div>
                    <div class="album-card">
                        <div class="album-aspect">
                            <a href>
                                <img src="https://w.wallhaven.cc/full/pk/wallhaven-pk3pv3.jpg" alt />
                            </a>
                            <a href>
                                <img src="https://w.wallhaven.cc/full/pk/wallhaven-pk3pv3.jpg" alt />
                            </a>
                            <a href>
                                <img src="https://w.wallhaven.cc/full/pk/wallhaven-pk3pv3.jpg" alt />
                            </a>
                            <a href>
                                <img src="https://w.wallhaven.cc/full/pk/wallhaven-pk3pv3.jpg" alt />
                            </a>
                        </div>
                        <div class="album-aspect-title">
                            <span>动画</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

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
                width: 280px;
                .album-aspect {
                    display: flex;
                    flex-wrap: wrap;
                    border-radius: 6px;
                    overflow: hidden;
                    a {
                        display: block;
                        width: 50%;
                        img {
                            width: 100%;
                            object-fit: cover;
                            height: 100%;
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