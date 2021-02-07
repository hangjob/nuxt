<template>
    <div class="wp special">
        <div class="item">
            <nuxt-link to="/" style="background-image: linear-gradient(45deg,#7fe496,#6edf8f)">
                <div class="item-container">
                    <h6>
                        <i class="iconfont icon-biaoqiankuozhan_shouye-151"></i>
                        <span>全栈导航</span>
                    </h6>
                </div>
            </nuxt-link>
        </div>
        <div class="item">
            <nuxt-link to="/daily" style="background-image: linear-gradient(45deg,#fe9078,#f1b87f)">
                <div class="item-container">
                    <h6>
                        <i class="iconfont icon-rili1"></i>
                        <span>每日推荐</span>
                    </h6>
                </div>
            </nuxt-link>
        </div>
        <div class="item">
            <nuxt-link to="/article" style="background-image: linear-gradient(45deg,#6cacfd,#93c8ff)">
                <div class="item-container">
                    <h6>
                        <i class="iconfont icon-wenzhangguanli"></i>
                        <span>精选文章</span>
                    </h6>
                </div>
            </nuxt-link>
        </div>
        <div class="item">
            <nuxt-link to="/intera" style="background-image: linear-gradient(45deg,#a682e4,#c1a7e9)">
                <div class="item-container">
                    <h6>
                        <i class="iconfont icon-liuyanban-05"></i>
                        <span>给我留言</span>
                    </h6>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.special {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 10px;
    .item {
        width: 290px;
        height: 80px;
        a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
            background-color: #72e091;
            border-radius: 5px;
            .item-container {
                h6 {
                    i {
                        color: #fff;
                        font-size: 20px;
                    }
                    span {
                        font-size: 18px;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>