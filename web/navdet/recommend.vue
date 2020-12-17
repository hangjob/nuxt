<template>
    <div class="recommend">
        <div class="recommend-heading">
            <h3 class="title">热门网站</h3>
            <a href class="more">...</a>
        </div>
        <div class="recommend-body">
            <a href>
                <div class="icon">
                    <img
                        src="https://www.vipbic.com/uploads/20180725/2e8aa01c9ab8fdbc91c48c68218adb8e.jpg"
                        alt
                    />
                </div>
                <div class="metas">
                    <h5>icons8</h5>
                    <p>75,400 个免费的平面图标，在 20 秒内生成任何格式、大小和颜色的图标保证有所有你需要的图标，毫无疑问，我们有社交媒体图标，例如微信，微博，QQ，和各种类型的箭头。当然也有基本的图标如 电话， 主页， 和 设置。然而如果你想要一些更加非正统的东西 ，只需发出请求。保证不收费。</p>
                </div>
            </a>
            <a href>
                <div class="icon">
                    <img
                        src="https://www.vipbic.com/uploads/20180725/2e8aa01c9ab8fdbc91c48c68218adb8e.jpg"
                        alt
                    />
                </div>
                <div class="metas">
                    <h5>icons8</h5>
                    <p>75,400 个免费的平面图标，在 20 秒内生成任何格式、大小和颜色的图标保证有所有你需要的图标，毫无疑问，我们有社交媒体图标，例如微信，微博，QQ，和各种类型的箭头。当然也有基本的图标如 电话， 主页， 和 设置。然而如果你想要一些更加非正统的东西 ，只需发出请求。保证不收费。</p>
                </div>
            </a>
            <a href>
                <div class="icon">
                    <img
                        src="https://www.vipbic.com/uploads/20180725/2e8aa01c9ab8fdbc91c48c68218adb8e.jpg"
                        alt
                    />
                </div>
                <div class="metas">
                    <h5>icons8</h5>
                    <p>75,400 个免费的平面图标，在 20 秒内生成任何格式、大小和颜色的图标保证有所有你需要的图标，毫无疑问，我们有社交媒体图标，例如微信，微博，QQ，和各种类型的箭头。当然也有基本的图标如 电话， 主页， 和 设置。然而如果你想要一些更加非正统的东西 ，只需发出请求。保证不收费。</p>
                </div>
            </a>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.recommend {
    padding: 20px;
    margin-bottom: 50px;
    background-color: #fff;
    border-radius: 5px;
    &-heading {
        position: relative;
        padding-bottom: 15px;
        background: #fff;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #f5f5f5;
        .title {
            line-height: 1;
            font-size: 18px;
            color: #545454;
        }
        .more {
            color: #919191;
            transition: all 0.3s ease;
            display: flex;
        }
    }
    &-body {
        display: flex;
        flex-wrap: wrap;
        a {
            display: flex;
            width: 50%;
            height: 60px;
            margin-top: 20px;
            .icon {
                width: 60px;
                height: 60px;
                margin-right: 15px;
                align-items: center;
                justify-content: center;
                border-radius: 5px;
                img {
                    width: auto;
                    height: auto;
                    max-width: 85%;
                    max-height: 85%;
                    border-radius: 5px;
                }
            }
            .metas {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                flex: 1;
                h5 {
                    font-size: 14px;
                    color: #606266;
                }
                p {
                    color: #c1c1c1;
                    word-break: break-all;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    padding-right: 5px;
                }
            }
        }
    }
}
</style>